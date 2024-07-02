import React, { useState } from "react";
import InputField from "../components/InputField";

const WorkExperience = ({ handleChange }) => {
  const [experienceLevel, setExperience] = useState(0);

  const handleRangeChange = (event) => {
    setExperience(event.target.value);
    handleChange(event);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-lg font-medium mb-4">Work Experience</h1>
      <div className="mb-4">
        <label className="sidebar-label-container flex items-center mb-2">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="test"
            className="mr-2"
          />
          <span className="checkmark"></span>Any experience
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Years of Experience: {experienceLevel}
        </label>
        <input
          type="range"
          min="0"
          max="30"
          value={experienceLevel}
          onChange={handleRangeChange}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
