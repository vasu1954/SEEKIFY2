import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Sidebar from "../Sidebar/Sidebar";
import Jobs from "./Jobs";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState(
    location.state || null
  );
  console.log("SELECTED : CATEGORY", location);
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/all-jobs");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched jobs:", data);
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        alert("Failed to fetch jobs. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setCurrentPage(1);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const filteredJobs = jobs.filter((job) => {
    const joblabel = job.joblabel?.toLowerCase() || "";
    const jobLocation = job.jobLocation?.toLowerCase() || "";
    const jobFields = job.jobFields?.toLowerCase() || "";
    const jobPostingDate = job.postingDate || "";
    const jobMaxPrice = job.maxPrice || "";
    const jobMinPrice = job.minPrice || "";
    const jobExperienceLevel = job.experienceLevel?.toLowerCase() || "";
    const jobEmploymentType = job.employmentType?.toLowerCase() || "";

    const jobMatchesQuery = joblabel.includes(query.toLowerCase());
    const jobMatchesCategory =
      !selectedCategory ||
      jobLocation === selectedCategory.toLowerCase() ||
      jobFields === selectedCategory.toLowerCase() ||
      jobPostingDate === selectedCategory ||
      parseInt(jobMaxPrice) >= parseInt(selectedCategory) ||
      jobExperienceLevel === selectedCategory.toLowerCase() ||
      jobEmploymentType === selectedCategory.toLowerCase();

    return jobMatchesQuery && jobMatchesCategory;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* Main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded">
          <Sidebar
            handleChange={handleChange}
            selectedCategory={selectedCategory}
            handleClick={handleClick}
          />
        </div>
        <div className="col-span-3 bg-white p-4 rounded">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : paginatedJobs.length > 0 ? (
            <Jobs
              result={paginatedJobs.map((data, i) => (
                <Card key={i} data={data} />
              ))}
            />
          ) : (
            <>
              <h1 className="text-lg font-bold mb-2">0 Jobs</h1>
              <p>No data found</p>
            </>
          )}

          {/* Pagination */}
          {paginatedJobs.length > 0 && (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="hover:underline"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
