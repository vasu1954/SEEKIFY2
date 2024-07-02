import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/myJobs/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, [user]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);

  const handleSearch = () => {
    const filter = jobs.filter(
      (job) =>
        job.joblabel.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    setJobs(filter);
    setIsLoading(false);
  };

  // pagination previous and next
  const nextPage = () => {
    if (indexOfLastItem < jobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // delete a job
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/job/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("Job Deleted Successfully!!");
          setJobs(jobs.filter((job) => job._id !== id));
        }
      })
      .catch((error) => {
        console.error("Error deleting job:", error);
      });
  };

  console.log(currentJobs);

  return (
    <div className="max-w-screen-2xl mx-auto flex items-center justify-center xl:px-24 px-4">
      <div className="w-full bg-white p-8 rounded-lg">
        <h1 className="text-center p-4 text-3xl font-bold text-blue mb-3">All My Jobs</h1>
        <div className="search-box p-2 text-center mb-6">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search Jobs..."
            className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gradient lg:w-6/12 mb-4 w-full"
          />
          <button
            onClick={handleSearch}
            className="gradient text-white font-semibold px-8 py-2 rounded-md transition duration-300"
          >
            Search
          </button>
        </div>
    
        <section className="bg-white w-full">
          <div className="w-full mb-12 xl:mb-0 px-4 mx-auto mt-5">
            <div className="relative justify-center flex flex-col min-w-0 break-words bg-white w-full mb-3 shadow-lg rounded">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex md:flex-row gap-4 flex-col items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-xl text-gray-700">
                      All Jobs
                    </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <Link
                      to="/post-job"
                      className="gradient text-white font-bold uppercase text-xs px-3 py-2 rounded-md shadow transition duration-300"
                    >
                      Post A New Job
                    </Link>
                  </div>
                </div>
              </div>

              <div className="block w-full overflow-hidden">
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      <th className="px-6 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        No.
                      </th>
                      <th className="px-6 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Title
                      </th>
                      <th className="px-6 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Company Name
                      </th>
                      <th className="px-6 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Salary
                      </th>
                      <th className="px-6 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Edit
                      </th>
                      <th className="px-6 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200 py-3 text-sm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Delete
                      </th>
                    </tr>
                  </thead>

                  {isLoading ? (
                    <tbody>
                      <tr>
                        <td colSpan="6" className="text-center py-4">
                          <p>Loading...</p>
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    <tbody>
                      {currentJobs.map((job, index) => (
                        <tr key={index} className="hover:bg-gray-100 transition duration-200">
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-gray-700">
                            {index + 1}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                            {job.joblabel}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                            {job.companyName}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                            {job.minPrice} - {job.maxPrice}
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                            <button className="hover:underline">
                              <Link to={`/edit-job/${job?._id}`}>Edit</Link>
                            </button>
                          </td>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                            <button
                              className="bg-red-600 py-2 px-4 text-white rounded-md hover:bg-red-700 transition duration-300"
                              onClick={() => handleDelete(job._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-black space-x-8 mt-6 mb-10">
            {currentPage > 1 && (
              <button
                onClick={prevPage}
                className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300"
              >
                Previous
              </button>
            )}
            {indexOfLastItem < jobs.length && (
              <button
                onClick={nextPage}
                className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300"
              >
                Next
              </button>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyJobs;
