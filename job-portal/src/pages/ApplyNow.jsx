import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Circles } from "react-loader-spinner";
import animator from "../assets/svgviewer-output.svg";

const ApplyNow = () => {
  const { joblabel } = useParams();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    areacode: "",
    phone: "",
    address: "",
    message: "",
    upload: null,
    joblabel: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (joblabel) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        joblabel,
      }));
    }
  }, [joblabel]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "phone" && (!/^\d*$/.test(value) || value.length > 10)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    for (const key in formData) {
      if (key !== "upload") {
        data.append(key, formData[key]);
      } else if (formData.upload) {
        data.append("upload", formData.upload);
      }
    }

    try {
      const response = await fetch("http://localhost:5000/submit-form", {
        method: "POST",
        body: data,
      });

      const responseData = await response.json();
      if (response.ok) {
        alert("Application submitted successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          gender: "",
          areacode: "",
          phone: "",
          address: "",
          message: "",
          upload: null,
          joblabel: "",
        });

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        alert(`Failed to submit application: ${responseData.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit application due to a network error.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 h-screen w-full flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-2xl">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label
                htmlFor="firstname"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={formData.firstname}
                placeholder="Your first name"
                className="mt-1 p-2 w-full border bg-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="lastname"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={formData.lastname}
                placeholder="Your last name"
                className="mt-1 p-2 w-full border bg-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                placeholder="example@email.com"
                className="mt-1 p-2 w-full border bg-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                className="mt-1 p-2 w-full border bg-white text-black rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <div className="flex gap-4">
              <input
                type="tel"
                name="areacode"
                id="areacode"
                value={formData.areacode}
                placeholder="eg. +91"
                maxLength={3}
                className="mt-1 p-2 w-1/3 border bg-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                placeholder="Phone number"
                maxLength={10}
                pattern="\d*"
                className="mt-1 p-2 w-full border bg-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              placeholder="Street address"
              className="mt-1 p-2 w-full border bg-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Cover Letter
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              value={formData.message}
              className="mt-1 p-2 w-full border bg-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="mb-4 flex items-center gap-4">
            <label
              htmlFor="upload"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Resume
            </label>
            <input
              type="file"
              name="upload"
              id="upload"
              ref={fileInputRef}
              className="text-sm text-gray-600"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 gradient text-white rounded-md hover:bg-indigo-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex justify-center items-center">
                <Circles
                  height="20"
                  width="20"
                  color="#FFFFFF"
                  ariaLabel="circles-loading"
                  visible={true}
                />
                <span className="ml-2">Submitting...</span>
              </div>
            ) : (
              "Apply Now"
            )}
          </button>
        </form>
      </div>
      <div className="mt-8">
        <h2 className="text-4xl font-bold mb-6 text-center">Apply Now</h2>
        <div className="mt-4">
          <img src={animator} alt="Apply now" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
