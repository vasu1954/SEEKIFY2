const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const nodemailer = require('nodemailer');
const multer = require('multer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB setup
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@seekify-job-portal.tasr22q.mongodb.net/?retryWrites=true&w=majority&appName=seekify-job-portal`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Nodemailer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Error with email transporter configuration:', error);
  } else {
    console.log('Email transporter is configured correctly.');
  }
});

// Function to connect to MongoDB and set up collections
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('jobPortal');
    const jobsCollection = db.collection('jobs');

    // Create index
    const indexKeys = { title: 1, category: 1 };
    const indexOptions = { name: 'titleCategory' };
    await jobsCollection.createIndex(indexKeys, indexOptions);
    return jobsCollection;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit process if MongoDB connection fails
  }
}

const jobsCollection = connectToMongoDB();

// Job posting endpoint
app.post('/post-job', async (req, res) => {
  try {
    const body = req.body;
    body.createdAt = new Date();
    const result = await (await jobsCollection).insertOne(body);
    if (result.insertedId) {
      res.status(200).send(result);
    } else {
      res.status(404).send({
        message: 'Cannot insert, try again later',
        status: false,
      });
    }
  } catch (error) {
    console.error('Error inserting job:', error);
    res.status(500).send({
      message: 'Cannot insert, try again later',
      status: false,
    });
  }
});

// Get all jobs
app.get('/all-jobs', async (req, res) => {
  try {
    const jobs = await (await jobsCollection).find({}).sort({ createdAt: -1 }).toArray();
    res.send(jobs);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).send({ message: 'Error fetching jobs' });
  }
});

// Get single job by ID
app.get('/all-jobs/:id', async (req, res) => {
  try {
    const job = await (await jobsCollection).findOne({ _id: new ObjectId(req.params.id) });
    res.send(job);
  } catch (error) {
    console.error('Error fetching job:', error);
    res.status(500).send({ message: 'Error fetching job' });
  }
});

// Get jobs by email
app.get('/myJobs/:email', async (req, res) => {
  try {
    const jobs = await (await jobsCollection).find({ postedBy: req.params.email }).toArray();
    res.send(jobs);
  } catch (error) {
    console.error('Error fetching jobs by email:', error);
    res.status(500).send({ message: 'Error fetching jobs by email' });
  }
});

// Delete a job
app.delete('/job/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await (await jobsCollection).deleteOne(filter);
    res.send(result);
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).send({ message: 'Error deleting job' });
  }
});

// Update a job
app.patch('/update-job/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const jobData = req.body;
    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
      $set: { ...jobData },
    };
    const options = { upsert: true };
    const result = await (await jobsCollection).updateOne(filter, updateDoc, options);
    res.send(result);
  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).send({ message: 'Error updating job' });
  }
});

// Submit form and send email
app.post('/submit-form', upload.single('upload'), async (req, res) => {
  try {
    const { firstname, lastname, email, gender, areacode, phone, address, message, jobLabel } = req.body;
    const file = req.file;

    console.log('Received joblabel:', jobLabel); // Log the received joblabel

    // Fetch the postedBy email using joblabel
    const job = await (await jobsCollection).findOne({ jobLabel: jobLabel }, { projection: { postedBy: 1 } });
    console.log('Database query result:', job); // Log the result of the database query
    if (!job) {
      console.log('Job not found for joblabel:', jobLabel); // Log joblabel if not found
      return res.status(404).json({ message: 'Job not found.' });
    }

    const postedBy = job.postedBy;
    console.log('Posted by email:', postedBy); // Log the postedBy email

    const applicantMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Job Application Received',
      text: `Hello ${firstname} ${lastname},

We have received your job application. Here are the details:
- Name: ${firstname} ${lastname}
- Email: ${email}
- Gender: ${gender}
- Area Code: ${areacode}
- Phone: ${phone}
- Address: ${address}
- Cover Letter: ${message}

Thank you for applying.`,
      attachments: file ? [{
        filename: file.originalname,
        content: file.buffer,
      }] : [],
    };

    const jobPosterMailOptions = {
      from: process.env.EMAIL_USER,
      to: postedBy,
      subject: 'New Job Application Received',
      text: `Hello,

A new job application has been received. Here are the details:
- Name: ${firstname} ${lastname}
- Email: ${email}
- Gender: ${gender}
- Area Code: ${areacode}
- Phone: ${phone}
- Address: ${address}
- Cover Letter: ${message}

Please review the attached file for more information.`,
      attachments: file ? [{
        filename: file.originalname,
        content: file.buffer,
      }] : [],
    };

    // Send email to applicant
    await transporter.sendMail(applicantMailOptions);
    console.log('Email sent to applicant successfully');

    // Send email to job poster
    await transporter.sendMail(jobPosterMailOptions);
    console.log('Email sent to job poster successfully');

    res.status(200).json({ message: 'Application submitted successfully.' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Failed to submit application due to a network error.' });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
