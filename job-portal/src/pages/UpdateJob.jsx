import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import PageHeader from "../components/PageHeader";

const UpdateJob = () => {
  const { id } = useParams();
  const {
    companyName,
    joblabel,
    companyLogo,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    employmentType,
    description,
    postedBy,
    skills,
    detailedJobDescription,
    roleAndResponsibilities,
    technicalAndProfessionalExpertise,
    benefits,
    jobFields,
  } = useLoaderData();

  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;

    fetch(`http://localhost:5000/update-job/${id}`, {
      method: "PATCH",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("Job Updated Successfully!!");
        }
      });
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Update This Job"} path={"Edit Job"} />

      {/* form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                defaultValue={joblabel}
                {...register("joblabel")}
                className="block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                placeholder="Ex: Microsoft"
                defaultValue={companyName}
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                placeholder="$20k"
                defaultValue={minPrice}
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                placeholder="$100k"
                defaultValue={maxPrice}
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                placeholder="Ex: Your City"
                defaultValue={jobLocation}
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                className="create-job-input"
                {...register("postingDate")}
                placeholder="Ex: 2023-11-03"
                type="date"
                defaultValue={postingDate}
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <input
                placeholder="Experience Level"
                defaultValue={experienceLevel}
                {...register("experienceLevel")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 5th row */}
          <div className="">
            <label className="block mb-2 text-lg">Required Skill Sets:</label>
            <CreatableSelect
              className="create-job-input py-4"
              defaultValue={skills}
              onChange={setSelectedOption}
              options={options}
              isMulti
            />
          </div>

          <div className="">
            <label className="block mb-2 text-lg">Required Departmnets</label>
            <select {...register("jobFields")} className="create-job-input">
              <option value={jobFields}>{jobFields}</option>
              <option value="IT">IT</option>
              <option value="Sales & Business">Sales & Business</option>
              <option value="Data Science & Analytics">
                Data Science & Analytics
              </option>
              <option value="Banking & Finance">Banking & Finance</option>
              <option value="Marketing & Communication">
                Marketing & Communication
              </option>
              <option value="Human Resources">Human Resources</option>
              <option value="Healthcare & Life Sciences">
                Healthcare & Life Sciences
              </option>
              <option value="Hardware & Networks">Hardware & Networks</option>
              <option value="UX, Design & Architecture">
                UX, Design & Architecture
              </option>
              <option value="Quality Assurance">Quality Assurance</option>
            </select>
          </div>

          {/* 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                placeholder="Paste your image url: https://weshare.com/img1.jpg"
                {...register("companyLogo")}
                className="create-job-input"
                defaultValue={companyLogo}
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value={employmentType}>{employmentType}</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none"
              rows={6}
              {...register("description")}
              placeholder="Job description"
              defaultValue={description}
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-lg">
              Detailed Job Description
            </label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none"
              rows={6}
              {...register("detailedJobDescription")}
              placeholder="Detailed Job Description"
              defaultValue={detailedJobDescription}
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-lg">
              Your Role and Responsibilities
            </label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none"
              rows={6}
              {...register("roleAndResponsibilities")}
              placeholder="Your role and responsibilities"
              defaultValue={roleAndResponsibilities}
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-lg">
              Required Technical and Professional Expertise
            </label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none"
              rows={6}
              {...register("technicalAndProfessionalExpertise")}
              placeholder="Technical and Professional Expertise"
              defaultValue={technicalAndProfessionalExpertise}
            />
          </div>

          <div className="w-full">
            <label className="block mb-2 text-lg">Benefits</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none"
              rows={6}
              {...register("benefits")}
              placeholder="Comma separated benefits, e.g., Health insurance, Paid time off, Dental insurance"
              defaultValue={benefits}
            />
          </div>

          {/* last row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted by</label>
            <input
              type="email"
              className="w-full pl-3 py-1.5 focus:outline-none"
              {...register("postedBy")}
              placeholder="your email"
              defaultValue={postedBy}
            />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateJob;
