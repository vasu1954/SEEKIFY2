import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCompanyCard from "../components/HomeCompanyCard";

const TopCompany = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [currentPage] = useState(1);
  const itemsPerPage = 4;
  const [query] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/all-jobs")
      .then((response) => {
        setJobs(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setIsLoading(false);
      });
  }, []);

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

  return (
    <div>
      <div className="col-span-2 p-4 rounded">
        {isLoading ? (
          <p className="font-medium">Loading...</p>
        ) : paginatedJobs.length > 0 ? (
          <div className=" justify-center  flex flex-wrap gap-7">
            {paginatedJobs.map((data, i) => (
              <HomeCompanyCard key={i} data={data} />
            ))}
          </div>
        ) : (
          <>
            <h3 className="text-lg font-bold mb-2">0 Jobs</h3>
            <p>No data found</p>
          </>
        )}
      </div>
    </div>
  );
};

export default TopCompany;
