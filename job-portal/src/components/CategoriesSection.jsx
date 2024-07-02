import React from "react";
import "../components/CategoriesSection.css";
import it_icon from "../assets/category_icons/it_icon.svg";
import arrow_icon from "../assets/category_icons/arrow_icon.svg";
import sales_icon from "../assets/category_icons/sales_icon.svg";
import datasci_icon from "../assets/category_icons/datasci_icon.svg";
import health_icon from "../assets/category_icons/health_icon.svg";
import marketing_icon from "../assets/category_icons/marketing_icon.svg";
import quality_icon from "../assets/category_icons/quality_icon.svg";
import ux_icon from "../assets/category_icons/ux_icon.svg";
import hardware_icon from "../assets/category_icons/hardware_icon.svg";
import human_icon from "../assets/category_icons/human_icon.svg";
import finance_icon from "../assets/category_icons/finance_icon.svg";
import { useNavigate } from "react-router-dom";

const CategoriesSection = () => {
  const navigate = useNavigate();

  const handleCategoryPress = (page) => {
    navigate("/home", { state: page });
  };
  return (
    <div className="container relative z-10 mx-auto mt-10 mb-10 p-6 justify-center items-center">
      <h2 className="w-full my-2 mt-7 text-5xl font-bold leading-tight text-center text-gray-800">
        Explore Job Categories
      </h2>
      <div className="w-full mt-2 mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-65 my-0 py-0 rounded-full"></div>
      </div>
      <div className="flex mt-14  flex-wrap gap-4 justify-center">
        {[
          { icon: it_icon, label: "IT" },
          { icon: sales_icon, label: "Sales & Business" },
          { icon: datasci_icon, label: "Data Science & Analytics" },
          { icon: finance_icon, label: "Banking & Finance" },
          { icon: human_icon, label: "Human Resources" },
          { icon: marketing_icon, label: "Marketing & Communication" },
          { icon: health_icon, label: "Healthcare & Life Sciences" },
          { icon: hardware_icon, label: "Hardware & Networks" },
          { icon: ux_icon, label: "UX, Design & Architecture" },
          { icon: quality_icon, label: "Quality Assurance" },
        ].map((category, index) => (
          <span
            key={index}
            onClick={() => handleCategoryPress(category.label)}
            className="category-card m-2 p-2 flex border-2 rounded-lg items-center justify-center h-20"
          >
            <img src={category.icon} alt={category.label} />
            <span className="text-xl p-3 truncate w-36">{category.label}</span>
            <img src={arrow_icon} alt="arrow icon" />
          </span>
        ))}
      </div>
      <h2 className="w-full my-2 mt-16 text-5xl font-bold leading-tight text-center text-gray-800">
        Latest Companies Hiring Now!
      </h2>
      <div className="w-full mt-2">
        <div className="h-1 mx-auto gradient w-64 opacity-65 my-0 py-0 rounded-full"></div>
      </div>
    </div>
  );
};

export default CategoriesSection;
