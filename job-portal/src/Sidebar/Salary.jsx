import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h1 className="text-lg font-medium mb-4">Salary</h1>

      <div>
        <label className="sidebar-label-container flex items-center mb-2">
          <input
            onChange={handleChange}
            type="radio"
            value=""
            name="test2"
            className="mr-2"
          />
          <span className="checkmark"></span>Any
        </label>

        <InputField
          handleChange={handleChange}
          value={"0-3 LPA"}
          title="0-3 LPA"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={"3-6 LPA"}
          title="3-6 LPA"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={"6-10 LPA"}
          title="6-10 LPA"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={"10-15 LPA"}
          title="10-15 LPA"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={"15-25 LPA"}
          title="15-25 LPA"
          name="test2"
        />

        <InputField
          handleChange={handleChange}
          value={"25-50 LPA"}
          title="25-50 LPA"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Salary;
