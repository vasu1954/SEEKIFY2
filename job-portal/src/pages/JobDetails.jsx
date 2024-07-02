import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FiCalendar, FiClock, FiMapPin, FiDatabase } from "react-icons/fi";
import { Link } from "react-router-dom";
const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }

  const {
    companyLogo,
    joblabel,
    companyName,
    jobLocation,
    jobFields,
    employmentType,
    minPrice,
    maxPrice,
    postingDate,
    description,
    detailedJobDescription,
    roleAndResponsibilities,
    technicalAndProfessionalExpertise,
    benefits,
  } = job;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-3 ">
      <div className="max-w-screen-xl space-y-5 border-2 rounded-lg mb-9 border-cyan-600  mx-auto p-5 sm:px-6 lg:px-8">
        <div className="flex  flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img
              src={companyLogo}
              alt={`${companyName} logo`}
              className="w-20 h-20 rounded-full border-2 p-2 border-gray-200 shadow-sm"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {joblabel}
              </h3>
              <p className="text-gray-600 text-lg">{companyName}</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to={`/jobs/${id}/apply`}>
              <button className="gradient text-white px-6 py-2 rounded-md shadow-sm hover:bg-blue-700 transition duration-300">
                Apply Now
              </button>
            </Link>
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md shadow-sm hover:bg-gray-300 transition duration-300">
              {employmentType}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Job Details
            </h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <FiMapPin className="mr-2" />
                <span>{jobLocation}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiDatabase className="mr-2" />
                <span>{jobFields}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiClock className="mr-2" />
                <span>{employmentType}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaIndianRupeeSign className="mr-2" />
                <span>
                  {minPrice} - {maxPrice}
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiCalendar className="mr-2" />
                <span>{postingDate}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Benefits
            </h4>
            <ul className="list-disc list-inside text-gray-600">
              {benefits ? (
                benefits.split(/(?<=[.?!])\s+/).map((sentence, index) => (
                  <li key={index} className="mb-2 bullet-point">
                    {sentence.trim()}
                  </li>
                ))
              ) : (
                <li>No benefits listed.</li>
              )}
            </ul>
          </div>

          <style>{`
  .bullet-point::before {
    content: "• ";
    margin-right: 0.5em;
    color: black; /* Optional: change bullet color */
  }
`}</style>
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Detailed Job Description
          </h4>
          <div className="text-gray-600">
            {(detailedJobDescription || description)
              .split(/(?<=[.?!])\s+/)
              .map((sentence, index) => (
                <p key={index} className="bullet-point">
                  {sentence.trim()}
                </p>
              ))}
          </div>
        </div>

        <style>{`
  .bullet-point::before {
    content: "• ";
    margin-right: 0.5em;
    color: black; /* Optional: change bullet color */
  }
`}</style>

        <div className="mt-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Role and Responsibilities
          </h4>
          <div className="text-gray-600">
            {roleAndResponsibilities
              .split(/(?<=[.?!])\s+/)
              .map((sentence, index) => (
                <p key={index} className="bullet-point">
                  {sentence.trim()}
                </p>
              ))}
          </div>
        </div>

        <style>{`
  .bullet-point::before {
    content: "• ";
    margin-right: 0.5em;
    color: black; /* Optional: change bullet color */
  }
`}</style>

        <div className="mt-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">
            Required Technical and Professional Expertise
          </h4>
          <div className="text-gray-600">
            {technicalAndProfessionalExpertise
              .split(/(?<=[.?!])\s+/)
              .map((sentence, index) => (
                <p key={index} className="bullet-point">
                  {sentence.trim()}
                </p>
              ))}
          </div>
        </div>

        <style>{`
  .bullet-point::before {
    content: "• ";
    margin-right: 0.5em;
    color: black; /* Optional: change bullet color */
  }
`}</style>
      </div>
    </div>
  );
};

export default JobDetails;
