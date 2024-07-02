import React from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

const Banner = ({
  handleInputChange,
  handleSearch,
  positionQuery,
  locationQuery,
}) => {
  const onSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 md:py-20 py-14 px-4">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Step into Your Next <span className="text-blue">Role</span>
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Your Path to Professional Success Starts Here: Search, Apply, and Get
        Hired Today
      </p>

      <form onSubmit={onSubmit} className="max-w-4xl  mt-8">
        <div className="flex flex-col md:flex-row  items-center justify-between gap-4 p-2 bg-white rounded-2xl shadow-md ring-2 ring-blue-800">
          <div className="relative w-full md:w-1/2">
            <FiSearch className="absolute inset-y-0 left-3 text-gray-400 mt-3 pointer-events-none" />
            <input
              type="text"
              name="position"
              id="position"
              className="w-full pl-10 pr-6 py-2 focus:outline-none rounded-2xl"
              placeholder="What position are you looking for?"
              onChange={handleInputChange}
              value={positionQuery}
              aria-label="Job position"
            />
          </div>

          <div className="relative w-full md:w-1/3">
            <FiMapPin className="absolute inset-y-0 left-3 text-gray-400 mt-3 pointer-events-none" />
            <input
              type="text"
              name="location"
              id="location"
              className="w-full pl-10 pr-6 py-2 focus:outline-none rounded-2xl "
              placeholder="Location"
              onChange={handleInputChange}
              value={locationQuery}
              aria-label="Job location"
            />
          </div>

          <button
            type="submit"
            className="gradient text-white font-semibold mr-1 py-2 px-6 rounded-xl shadow-md hover:gradeint transition duration-300 ease-in-out"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
