import React from "react";
import "./LandingPage.css";
import heroImage from "../assets/Job hunt-cuate.svg";
import { useNavigate } from "react-router-dom";
import s_shape from "../assets/s_shape.svg";

const MainBanner = () => {
  const navigate = useNavigate();

  return (
    <div
      className="leading-normal tracking-normal text-white gradient"
      id="nav"
    >
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex-1 flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left px-4 pl-20">
            <h1 className="my-4 text-4xl md:text-5xl font-bold leading-tight">
              Find your dream job now
            </h1>
            <p className="leading-normal text-lg md:text-xl w-full md:w-3/4 mb-8">
              Transforming Job Search into Career Fulfillment: Build Your
              Professional Future Together
            </p>
            <button
              className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              onClick={() => navigate("/home")}
            >
              Find Jobs
            </button>
          </div>
          <div className="w-full flex-1 md:w-3/5 py-6 text-center">
            <img className="w-full md:w-4/5 z-50" src={heroImage} alt="Hero" />
          </div>
        </div>
      </div>
      <div className="relative -mt-12 lg:-mt-24">
        <img src={s_shape} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default MainBanner;
