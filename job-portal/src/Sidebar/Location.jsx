import React, { useState } from "react";
import InputField from "../components/InputField";

const Location = ({ handleChange }) => {
  const [showAll, setShowAll] = useState(false);

  const handleViewMore = () => {
    setShowAll(true);
  };

  const handleViewLess = () => {
    setShowAll(false);
  };

  const locations = [
    { value: "Mumbai", title: "Mumbai" },
    { value: "Pune", title: "Pune" },
    { value: "Bangalore", title: "Bangalore" },
    { value: "Chennai", title: "Chennai" },
    { value: "Delhi", title: "Delhi" },
    { value: "Ahmedabad", title: "Ahmedabad" },
    { value: "Gandhinagar", title: "Gandhinagar" },
    { value: "Chandigarh", title: "Chandigarh" },
    { value: "Lucknow", title: "Lucknow" },
    { value: "Hyderabad", title: "Hyderabad" },
    { value: "Kolkata", title: "Kolkata" },
    { value: "Guwahati", title: "Guwahati" },
    { value: "Mangalore", title: "Mangalore" },
  ];

  return (
    <div className="p-4 bg-white+ shadow-md rounded-md">
      <h1 className="text-lg font-medium mb-4">Location</h1>
      <div>
        <label className="sidebar-label-container flex items-center mb-2">
          <input onChange={handleChange} type="radio" value="" name="test" className="mr-2" />
          <span className="checkmark"></span>All
        </label>
        {locations.slice(0, 4).map((location) => (
          <InputField
            key={location.value}
            handleChange={handleChange}
            value={location.value}
            title={location.title}
            name="test"
          />
        ))}
        {showAll && (
          locations.slice(4).map((location) => (
            <InputField
              key={location.value}
              handleChange={handleChange}
              value={location.value}
              title={location.title}
              name="test"
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

export default Location;
