import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { FaIndianRupeeSign } from "react-icons/fa6";

const SalaryPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        const groupedJobs = groupAndAverageJobs(data);
        setJobs(groupedJobs);
        setFilteredJobs(groupedJobs);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to group jobs by jobFields and calculate average maxPrice
  const groupAndAverageJobs = (jobs) => {
    const grouped = jobs.reduce((acc, job) => {
      const jobField = job.jobFields;
      const maxPrice = parseFloat(job.maxPrice);

      if (!acc[jobField]) {
        acc[jobField] = { ...job, maxPrice, count: 1 };
      } else {
        acc[jobField].maxPrice += maxPrice;
        acc[jobField].count += 1;
      }
      return acc;
    }, {});

    return Object.values(grouped).map((job) => ({
      ...job,
      maxPrice: (job.maxPrice / job.count).toFixed(),
    }));
  };

  // search functionality
  useEffect(() => {
    const filter = jobs.filter((job) =>
      job.jobFields.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("Filtered data:", filter);
    setFilteredJobs(filter);
  }, [searchText, jobs]);

  const handleSearch = () => {
    const filter = jobs.filter((job) =>
      job.jobFields.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("Filtered data:", filter);
    setFilteredJobs(filter);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Estimate Salary"} path={"Salary"} />

      <div className="mt-5">
        <div className="search-box p-2 text-center mb-2">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gradient  lg:w-6/12  mb-4 w-full"
            placeholder="Search job fields..."
          />
          <button
            onClick={handleSearch}
            className="gradient text-white font-semibold px-8 py-2 rounded-md mb-4 transition duration-300 hover:from-blue-600 hover:to-blue-800"
          >
            Search
          </button>
        </div>
      </div>

      {/* salary card */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12">
        {filteredJobs.map((data) => (
          <div
            key={data._id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl  transition-transform transform  border-gray-700 "
          >
            <h4 className="font-semibold text-xl mb-4 text-primary">
              {data.jobFields}
            </h4>
            <p className="my-2 items-center gap-1 flex font-medium text-blue text-md">
              Average Pacakage <FaIndianRupeeSign /> {data.maxPrice} LPA
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryPage;
