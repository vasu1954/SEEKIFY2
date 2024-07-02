import React, { useState } from "react";
import InputField from "../components/InputField";

const Fields = ({ handleChange, selectedCategory }) => {
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setShowAll(true);
  };

  const handleViewLess = () => {
    setShowAll(false);
  };

  const fields = [
    { value: "IT", title: "IT" },
    { value: "Sales & Business", title: "Sales & Business" },
    { value: "Data Science & Analytics", title: "Data Science & Analytics" },
    { value: "Banking & Finance", title: "Banking & Finance" },
    { value: "Marketing & Communication", title: "Marketing & Communication" },
    { value: "Human Resources", title: "Human Resources" },
    { value: "Healthcare & Life Sciences", title: "Healthcare & Life Sciences" },
    { value: "Hardware & Networks", title: "Hardware & Networks" },
    { value: "UX, Design & Architecture", title: "UX, Design & Architecture" },
    { value: "Quality Assurance", title: "Quality Assurance" },
  ];
  console.log("SELECTED CATEGORY : ", selectedCategory)

  return (
    <div className="p-4  bg-white shadow-md rounded-md">
      <h1 className="text-lg font-medium mb-2">Fields</h1>
      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value={""} name="fields" />
          <span className="checkmark"></span>All
        </label>
        {fields.slice(0, 4).map((fields) => (
          <InputField
            key={fields.value}
            handleChange={handleChange}
            value={fields.value}
            title={fields.title}
            name="fields"
          />
        ))}
        {showAll && (
          fields.slice(4).map((fields) => (
            <InputField
              key={fields.value}
              handleChange={handleChange}
              value={fields.value}
              title={fields.title}
              name="fields"
            />
          ))
        )}
        <button
          onClick={showAll ? handleViewLess : handleViewMore}
          className="mt-4 text-blue-500 hover:text-blue-700"
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default Fields;
