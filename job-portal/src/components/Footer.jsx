import React from "react";
import logo from "../assets/only_logo.svg";
import facebook from "../assets/footer_icon/facebook.svg";
import instagram from "../assets/footer_icon/instagram.svg";
import twitter from "../assets/footer_icon/twitter.svg";
import youtube from "../assets/footer_icon/youtube.svg";

const Footer = () => {
  return (
    <section className="mx-auto text-center gradient">
      <footer className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8 py-8 lg:grid-cols-8">
            <div className="mb-0 col-span-full lg:col-span-3">
              <a
                className="text-white items-center no-underline font-bold text-2xl lg:text-2xl"
                style={{ display: "flex", paddingTop: "20px" }}
                href="#"
              >
                <img src={logo} width="40" height="40" alt="logo" />
                <h1>Seekify</h1>
              </a>
              <p className="py-8 text-white lg:max-w-xs text-center text-base lg:text-left font-bold">
                Find your dream job with us. Empowering careers, one job at a
                time.
              </p>
              <div className="flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0 ">
                <a
                  href="javascript:;"
                  className="w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center  hover:bg-gray-900"
                >
                  <img
                    src={twitter}
                    alt="twitter"
                    className="w-28 h-28 fill"
                  ></img>
                </a>
                <a
                  href="javascript:;"
                  className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center  hover:bg-gray-900 "
                >
                  <img
                    src={instagram}
                    alt="instagram"
                    className="w-28 h-28"
                  ></img>
                </a>
                <a
                  href="javascript:;"
                  className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center   hover:bg-gray-900 "
                >
                  <img
                    src={facebook}
                    alt="facebook"
                    className="w-26 h-26"
                  ></img>
                </a>
                <a
                  href="javascript:;"
                  className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center   hover:bg-gray-900 "
                >
                  <img src={youtube} alt="youtube" className="w-28 h-28"></img>
                </a>
              </div>
            </div>

            <div className="w-full text-center pt-5 lg:w-auto lg:text-left col-span-full sm:col-span-4 md:col-span-4 lg:col-span-2 ">
              <h1 className=" text-white font-medium text-2xl mb-7">
                Get In Touch
              </h1>
              <ul className="text-white  transition-all duration-500 ">
                <li className="mb-6 hover:text-gray-900 text-base">
                  <a href="mailto:seekify07@gmail.com">seekify07@gmail.com</a>
                </li>
                <li className="mb-6 hover:text-gray-900 text-base">
                  <a href="tel:+918140569642">+91 8140569642</a>
                </li>
                <li className="mb-6 hover:text-gray-900 text-base">
                  KH-5, Sector-15, Gandhinagar, Gujarat.
                </li>
              </ul>
            </div>
            <div className="w-full text-center lg:w-auto pt-5 lg:text-left col-span-full sm:order-last sm:col-span-4 md:col-span-4 lg:order-none lg:col-span-1">
              <h1 className=" text-white font-medium text-2xl mb-7 ">
                Products
              </h1>
              <ul className="text-white transition-all duration-500  ">
                <li className="mb-6">
                  <a href="/" className=" hover:text-gray-900 text-base">
                    Dashboard
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    href="/AboutUsPage"
                    className=" hover:text-gray-900 text-base"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-6">
                  <a href="/home" className=" hover:text-gray-900 text-base">
                    Companies
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full pt-5 ml-14 lg:w-auto lg:text-left col-span-full sm:col-span-4 md:col-span-4 lg:col-span-2">
              <h1 className="text-center text-white font-medium mb-7 lg:text-left text-2xl">
                Newsletter
              </h1>
              <div className="flex flex-col items-center lg:items-start">
                <input
                  type="text"
                  className="w-full h-12 border border-gray-300 rounded-full py-2.5 px-5 shadow-sm text-gray-800 mb-5 text-center lg:text-left placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
                  placeholder="Your email here.."
                />
                <button
                  type="submit"
                  className="h-11 py-3 px-6 bg-indigo-900 transition-all duration-500 shadow-md rounded-full text-sm text-white font-semibold w-fit hover:bg-blue-700"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="py-5 border-t border-white-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className=" text-white font-bold text-base">
                ©<a href="https://pagedone.io/">Seekify</a> 2024, All rights
                reserved.
              </span>
              <ul className="flex items-center gap-9 mt-4 lg:mt-0">
                <li>
                  <a
                    href="javascript:;"
                    className="text-base text-white font-bold"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-base text-white font-bold"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:;"
                    className="text-base text-white font-bold"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
