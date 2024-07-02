import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;

    fetch("http://localhost:5000/post-job", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged === true) {
          alert("Job Posted Successfully!!");
        }
        reset();
        setSelectedOption(null);
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
    { value: "Python", label: "Python" },
    { value: "SQL", label: "SQL" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16 rounded-lg mb-10  shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* 1st row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg font-medium text-gray-700">
                Job Title
              </label>
              <input
                placeholder="Enter the title"
                {...register("joblabel", { required: "Job Title is required" })}
                className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                  errors.joblabel ? "border-red-500" : ""
                }`}
              />
              {errors.joblabel && (
                <span className="text-red-500 text-sm">
                  {errors.joblabel.message}
                </span>
              )}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg font-medium text-gray-700">
                Company Name
              </label>
              <input
                placeholder="Ex: Microsoft"
                {...register("companyName", {
                  required: "Company Name is required",
                })}
                className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                  errors.companyName ? "border-red-500" : ""
                }`}
              />
              {errors.companyName && (
                <span className="text-red-500 text-sm">
                  {errors.companyName.message}
                </span>
              )}
            </div>
          </div>

          {/* 2nd row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg font-medium text-gray-700">
                Minimum Salary
              </label>
              <input
                placeholder="Enter minimum Salary"
                {...register("minPrice", {
                  required: "Minimum Salary is required",
                })}
                className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                  errors.minPrice ? "border-red-500" : ""
                }`}
              />
              {errors.minPrice && (
                <span className="text-red-500 text-sm">
                  {errors.minPrice.message}
                </span>
              )}
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg font-medium text-gray-700">
                Maximum Salary
              </label>
              <input
                placeholder="Enter maximum Salary"
                {...register("maxPrice", {
                  required: "Maximum Salary is required",
                })}
                className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                  errors.maxPrice ? "border-red-500" : ""
                }`}
              />
              {errors.maxPrice && (
                <span className="text-red-500 text-sm">
                  {errors.maxPrice.message}
                </span>
              )}
            </div>
          </div>

          {/* 3rd row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg font-medium text-gray-700">
                Job Location
              </label>
              <input
                placeholder="Ex: Your City"
                {...register("jobLocation", {
                  required: "Job Location is required",
                })}
                className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                  errors.jobLocation ? "border-red-500" : ""
                }`}
              />
              {errors.jobLocation && (
                <span className="text-red-500 text-sm">
                  {errors.jobLocation.message}
                </span>
              )}
            </div>
          </div>

          {/* 4th row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg font-medium text-gray-700">
                Job Posting Date
              </label>
              <input
                className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                  errors.postingDate ? "border-red-500" : ""
                }`}
                {...register("postingDate", {
                  required: "Job Posting Date is required",
                })}
                placeholder="Ex: 2023-11-03"
                type="date"
              />
              {errors.postingDate && (
                <span className="text-red-500 text-sm">
                  {errors.postingDate.message}
                </span>
              )}
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg font-medium text-gray-700">
                Experience Level
              </label>
              <input
                {...register("experienceLevel", {
                  required: "Experience Level is required",
                })}
                className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                  errors.experienceLevel ? "border-red-500" : ""
                }`}
              ></input>
              {errors.experienceLevel && (
                <span className="text-red-500 text-sm">
                  {errors.experienceLevel.message}
                </span>
              )}
            </div>
          </div>

          {/* 5th row */}
          <div className="">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Required Skill Sets:
            </label>
            <CreatableSelect
              className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                errors.skills ? "border-red-500" : ""
              }`}
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
            />
            {errors.skills && (
              <span className="text-red-500 text-sm">Skills are required</span>
            )}
          </div>

          {/* 6th row */}
          <div className="">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Required Departments
            </label>
            <select
              {...register("jobFields", {
                required: "Employment Type is required",
              })}
              className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                errors.jobFields ? "border-red-500" : ""
              }`}
            >
              <option value="">Select your Department</option>
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
            {errors.jobFields && (
              <span className="text-red-500 text-sm">
                {errors.jobFields.message}
              </span>
            )}
          </div>

          {/* 7th row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg font-medium text-gray-700">
                Company Logo
              </label>
              <input
                type="url"
                placeholder="Paste your image url: https://weshare.com/img1.jpg"
                {...register("companyLogo", {
                  required: "Company Logo is required",
                })}
                className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                  errors.companyLogo ? "border-red-500" : ""
                }`}
              />
              {errors.companyLogo && (
                <span className="text-red-500 text-sm">
                  {errors.companyLogo.message}
                </span>
              )}
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg font-medium text-gray-700">
                Employment Type
              </label>
              <select
                {...register("employmentType", {
                  required: "Employment Type is required",
                })}
                className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                  errors.employmentType ? "border-red-500" : ""
                }`}
              >
                <option value="">Select your job type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
              {errors.employmentType && (
                <span className="text-red-500 text-sm">
                  {errors.employmentType.message}
                </span>
              )}
            </div>
          </div>

          {/* 8th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Job Description
            </label>
            <textarea
              className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                errors.description ? "border-red-500" : ""
              }`}
              rows={6}
              {...register("description", {
                required: "Job Description is required",
              })}
              placeholder="Job description"
              defaultValue={""}
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>

          {/* new row: Detailed Job Description */}
          <div className="w-full">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Detailed Job Description
            </label>
            <textarea
              className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                errors.detailedJobDescription ? "border-red-500" : ""
              }`}
              rows={6}
              {...register("detailedJobDescription", {
                required: "Detailed Job Description is required",
              })}
              placeholder="Detailed job description"
            />
            {errors.detailedJobDescription && (
              <span className="text-red-500 text-sm">
                {errors.detailedJobDescription.message}
              </span>
            )}
          </div>

          {/* new row: Your Role and Responsibilities */}
          <div className="w-full">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Your Role and Responsibilities
            </label>
            <textarea
              className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                errors.roleAndResponsibilities ? "border-red-500" : ""
              }`}
              rows={6}
              {...register("roleAndResponsibilities", {
                required: "Role and Responsibilities are required",
              })}
              placeholder="Your role and responsibilities"
            />
            {errors.roleAndResponsibilities && (
              <span className="text-red-500 text-sm">
                {errors.roleAndResponsibilities.message}
              </span>
            )}
          </div>

          {/* new row: Required Technical and Professional Expertise */}
          <div className="w-full">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Required Technical and Professional Expertise
            </label>
            <textarea
              className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                errors.technicalAndProfessionalExpertise ? "border-red-500" : ""
              }`}
              rows={6}
              {...register("technicalAndProfessionalExpertise", {
                required: "Technical and Professional Expertise is required",
              })}
              placeholder="Required technical and professional expertise"
            />
            {errors.technicalAndProfessionalExpertise && (
              <span className="text-red-500 text-sm">
                {errors.technicalAndProfessionalExpertise.message}
              </span>
            )}
          </div>

          {/* new row: Benefits */}
          <div className="w-full">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Benefits
            </label>
            <textarea
              className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                errors.benefits ? "border-red-500" : ""
              }`}
              rows={6}
              {...register("benefits", { required: "Benefits are required" })}
              placeholder="Comma separated benefits, e.g., Health insurance, Paid time off, Dental insurance"
            />
            {errors.benefits && (
              <span className="text-red-500 text-sm">
                {errors.benefits.message}
              </span>
            )}
          </div>

          {/* last row */}
          <div className="w-full">
            <label className="block mb-2 text-lg font-medium text-gray-700">
              Job Posted by
            </label>
            <input
              type="email"
              className={`block w-full border border-gray-300 bg-white py-2 px-3 rounded-md shadow-sm focus:outline-none ${
                errors.postedBy ? "border-red-500" : ""
              }`}
              {...register("postedBy", {
                required: "Job Posted by is required",
              })}
              placeholder="your email"
            />
            {errors.postedBy && (
              <span className="text-red-500 text-sm">
                {errors.postedBy.message}
              </span>
            )}
          </div>

          <div className="w-full flex justify-end mt-8">
            <input
              type="submit"
              className="gradient md:rounded-e-md md:rounded-s-md  text-white font-semibold px-8 py-2 rounded-md cursor-pointer hover:bg-blue-700 focus:outline-none transition duration-300"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
