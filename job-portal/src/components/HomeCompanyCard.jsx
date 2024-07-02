import React from "react";
import PropTypes from "prop-types";
import { FiDatabase, FiMapPin } from "react-icons/fi";

import { Link } from "react-router-dom";

const HomeCompanyCard = ({ data }) => {
  const {
    _id,
    companyLogo,
    joblabel,
    companyName,
    jobLocation,
    jobFields,
    description,
  } = data;

  return (
    <div className="p-2  box-border w-full sm:w-[calc(20%-20px)]">
      <section className="border bg-white  transition-transform transform hover:shadow-2xl border-gray-700 rounded-lg p-4  h-full overflow-hidden">
        <Link
          to={`/jobs/${_id}`}
          className="flex flex-col gap-4 items-start h-full"
        >
          <img
            src={companyLogo}
            alt={`${companyName} logo`}
            className="w-16 h-16 mb-4 object-contain"
          />
          <div className="flex-1">
            <h3 className="text-blue-600 text-md mb-2">{companyName}</h3>
            <h3 className="text-md font-bold text-gray-800 mb-2">{joblabel}</h3>
            <div className="text-gray-600 text-sm flex-wrap gap-2 mb-4">
              <span className="flex items-center gap-1">
                <FiMapPin /> {jobLocation}
              </span>
              <span className="flex items-center gap-1">
                <FiDatabase /> {jobFields}
              </span>
            </div>
            <p className="text-gray-700 text-sm line-clamp-2 overflow-hidden">
              {description}
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
};

HomeCompanyCard.propTypes = {
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

HomeCompanyCard.defaultProps = {
  companyLogo: "",
};

export default HomeCompanyCard;
