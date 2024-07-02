import React from "react";
import PropTypes from "prop-types";
import { FiCalendar, FiClock, FiDatabase, FiMapPin } from "react-icons/fi";
import { FaBriefcase, FaIndianRupeeSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    _id,
    companyLogo,
    joblabel,
    companyName,
    jobLocation,
    jobFields,
    employmentType,
    minPrice,
    maxPrice,
    postingDate,
    description,
  } = data;

  return (
    <div className="p-4">
      <section className="space-y-5 border-2 rounded-lg border-cyan-600 shadow-md p-6 bg-white h-64 overflow-hidden">
        <Link
          to={`/jobs/${_id}`}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <img
            src={companyLogo}
            alt={`${companyName} logo`}
            className="w-16 h-16 mb-4 sm:mb-0"
          />
          <div className="flex-1">
            <h4 className="text-blue-600 mb-1">{companyName}</h4>
            <h3 className="text-lg font-semibold mb-2">{joblabel}</h3>
            <div className="text-blue-600/70 text-base flex flex-wrap gap-2 mb-2">
              <span className="flex items-center gap-2">
                <FiMapPin /> {jobLocation}
              </span>
              <span className="flex items-center gap-2">
                <FiDatabase /> {jobFields}
              </span>
              <span className="flex items-center gap-2">
                <FiClock /> {employmentType}
              </span>
              <span className="flex items-center gap-2">
                <FaIndianRupeeSign /> {minPrice}-{maxPrice}
              </span>
              <span className="flex items-center gap-2">
                <FiCalendar /> {postingDate}
              </span>
            </div>
            <p className="text-base text-blue-600/70 line-clamp-4">
              {description}
            </p>
          </div>
        </Link>
        <Link
          to={`/apply/${_id}`}
          className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Apply Now
        </Link>
      </section>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    companyLogo: PropTypes.string,
    joblabel: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    jobLocation: PropTypes.string.isRequired,
    employmentType: PropTypes.string.isRequired,
    minPrice: PropTypes.number.isRequired,
    maxPrice: PropTypes.number.isRequired,
    postingDate: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    jobFields: PropTypes.string.isRequired,
  }).isRequired,
};

Card.defaultProps = {
  companyLogo: "",
};

export default Card;
