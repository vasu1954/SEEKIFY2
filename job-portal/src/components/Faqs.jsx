import React, { useState, useRef, useEffect } from "react";
import "tailwindcss/tailwind.css";
import faqsvg from "../assets/faq-animate.svg";
import faqarrow from "../assets/faq-arrow.svg";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, 6);
  }, []);

  useEffect(() => {
    if (activeIndex !== null && contentRefs.current[activeIndex]) {
      contentRefs.current[
        activeIndex
      ].style.maxHeight = `${contentRefs.current[activeIndex].scrollHeight}px`;
    }
  }, [activeIndex]);

  return (
    <div className="h-full bg-blue-50">
      <h2 className="w-full my-2 mt-7 text-5xl font-bold leading-tight text-center text-gray-800">
        FAQS
      </h2>
      <div className="w-full mt-2 mb-4">
        <div className="h-1 mx-auto gradient w-64 opacity-65 my-0 py-0 rounded-full"></div>
      </div>
      <main className="p-5 bg-light-blue">
        <div className="flex my-2 w-full gap-8">
          <div className="flex w-2/5">
            <img src={faqsvg} className="h-fit w-fit"></img>
          </div>
          <div className="w-2/4 pt-14 sm:w-10/12 md:w-1/2 my-1">
            <h2 className="text-xl font-semibold text-vnet-blue mb-2">
              FAQ - JobPosting, JobApply etc.
            </h2>
            <ul className="flex flex-col">
              {[
                {
                  question: "What is Seekify?",
                  answer:
                    "Seekify is a platform that connects job seekers with employers. We provide a wide range of job listings across various industries and locations.",
                },
                {
                  question: "How do I create an account?",
                  answer:
                    'To create an account, click on the "Sign Up" button at the top right corner of the homepage and fill out the required information. Once you complete the registration process, you will be redirected to the home page.',
                },
                {
                  question: "How do I post a job?",
                  answer:
                    'To post a job, log in to your employer account and click on the "Post a Job" button. Fill out the job details and choose a posting package. Once you have completed the form, your job listing will be published.',
                },
                {
                  question: "How do I search for jobs?",
                  answer:
                    "You can search for jobs by entering keywords, location, and job category in the search bar on the homepage. You can also use advanced search filters to refine your search results.",
                },
                {
                  question: "How do I manage my job listings?",
                  answer:
                    'You can manage your job listings by logging in to your employer account and clicking on the "My Jobs" tab. Here, you can edit and delete your job postings.',
                },
                {
                  question: "How do I apply for a job?",
                  answer:
                    'Once you find a job that interests you, click on the job title to view the full job details. Click the "Apply Now" button and follow the instructions to submit your application.',
                },
              ].map((item, index) => (
                <li key={index} className="bg-white my-2 shadow-lg">
                  <h2
                    onClick={() => handleToggle(index)}
                    className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                  >
                    <span>{item.question}</span>
                    <img
                      src={faqarrow}
                      className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                      alt="arrow"
                    ></img>
                  </h2>
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    style={{
                      maxHeight:
                        activeIndex === index
                          ? `${contentRefs.current[index].scrollHeight}px`
                          : "0",
                    }}
                    className={`border-l-2 border-purple-600 overflow-hidden transition-max-height duration-500 ease-in-out`}
                  >
                    <p className="pb-3 px-3 text-gray-900">{item.answer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQAccordion;
