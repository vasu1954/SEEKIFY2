import React from "react";
import om from "../assets/about-us-img/om.png";
import maharshi from "../assets/about-us-img/maharshi.png";
import jash from "../assets/about-us-img/jash.png";
import vasu from "../assets/about-us-img/vasu.png";
import kushal from "../assets/about-us-img/kushal.png";
import ravi from "../assets/about-us-img/ravi.png";
import sahil from "../assets/about-us-img/sahil.png";
import rutu from "../assets/about-us-img/rutu.png";
import linkedin from "../assets/about-us-img/linkedin.png";
import github from "../assets/about-us-img/github-142-svgrepo-com.svg";
import mailpng from "../assets/about-us-img/email.png";
import twitter from "../assets/about-us-img/twitter-color-svgrepo-com.svg";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Om Chopada",
      designation: "Team Leader",
      role: "(Frontend Developer)",
      imgSrc: om,
      linkedin: "https://www.linkedin.com/in/om-chopada-907968254/",
      twitter: "#",
      github: "https://github.com/ChopadaOm",
      email: "omchopada1286@gmail.com",
    },
    {
      name: "Jash Bhagat",
      designation: "Team Member",
      role: "(Full Stack Developer)",
      imgSrc: jash,
      linkedin: "https://www.linkedin.com/in/jash-bhagat-73649023a/",
      twitter: "#",
      github: "https://github.com/jashhere",
      email: "jashbhagat5274@gmail.com",
    },
    {
      name: "Kushal Prajapati",
      designation: "Team Member",
      role: "(Frontend Developer)",
      imgSrc: kushal,
      linkedin: "https://www.linkedin.com/in/kushal-prajapati-431874243/",
      twitter: "#",
      github: "https://github.com/kushalprajapati7561",
      email: "prajapatikushalmukeshkumar@gmail.com",
    },
    {
      name: "Vasu Vaghela",
      designation: "Team Member",
      role: "(Full Stack Developer)",
      imgSrc: vasu,
      linkedin: "https://www.linkedin.com/in/vasu-vaghela-261a62175/",
      twitter: "#",
      github: "https://github.com/vasu1954",
      email: "vaghelavasu004@gmail.com",
    },
    {
      name: "Maharshi Patel",
      designation: "Team Member",
      role: "(Full Stack Developer)",
      imgSrc: maharshi,
      linkedin: "https://www.linkedin.com/in/maharshi-patel-a1012a244/",
      twitter: "https://x.com/maharshipatel07",
      github: "https://github.com/Maharshi2708",
      email: "patelmaharshi.2708@gmail.com",
    },
    {
      name: "Ravi Patel",
      designation: "Team Member",
      role: "(Frontend Developer)",
      imgSrc: ravi,
      linkedin: "https://www.linkedin.com/in/ravi-patel-653313222/",
      twitter: "#",
      github: "https://github.com/RAVIPATEL289",
      email: "ravipatel290804@gmail.com",
    },
    {
      name: "Sahil Prajapati",
      designation: "Team Member",
      role: "(Frontend Developer)",
      imgSrc: sahil,
      linkedin: "https://www.linkedin.com/in/sahil-prajapati-778650234/",
      twitter: "#",
      github: "https://github.com/Sahil-0ss",
      email: "sahilprajapati1401@gmail.com",
    },
    {
      name: "Rutu Padhiyar",
      designation: "Team Member",
      role: "(Backend Developer)",
      imgSrc: rutu,
      linkedin: "https://www.linkedin.com/in/rutu-padhiyar-794148313/",
      twitter: "#",
      github: "https://github.com/rutu-padhiyar-dev",
      email: "rutupadhiyar40@gmail.com",
    },
  ];

  return (
    <div>
      <section className="bg-white dark:bg-white-400">
        <div className=" mx-auto mt-12 mb-16  max-w-screen-xl text-center ">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-blue">Us</span>
            </h2>
            <div className="w-full mt-2 mb-4">
              <div className="h-1 mx-auto gradient w-64 opacity-65 my-0 py-0 rounded-full"></div>
            </div>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center text-gray-500 dark:text-gray-400"
              >
                <img
                  className="mx-auto mb-4 w-36 h-36 rounded-full"
                  src={member.imgSrc}
                  alt={`${member.name} Avatar`}
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  <a href="#">{member.name}</a>
                </h3>
                <p className="text-gray-800">{member.designation}</p>
                <p className="text-gray-800">{member.role}</p>
                <ul className="flex justify-center mt-4 space-x-4">
                  {member.linkedin && (
                    <li>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                      >
                        <img
                          src={linkedin}
                          className="h-6 w-6"
                          alt="LinkedIn"
                        />
                      </a>
                    </li>
                  )}
                  {member.twitter && (
                    <li>
                      <a
                        href={member.twitter}
                        className="text-[#39569c] hover:text-gray-900 dark:hover:text-white"
                      >
                        <img src={twitter} className="h-6 w-6" alt="Twitter" />
                      </a>
                    </li>
                  )}
                  {member.github && (
                    <li>
                      <a
                        onClick={() => window.open(member.github)}
                        className="text-gray-900 hover:text-gray-900 dark:hover:text-black dark:text-black-300 cursor-pointer"
                      >
                        <img src={github} className="w-6 h-6" alt="GitHub" />
                      </a>
                    </li>
                  )}
                  {member.email && (
                    <li>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
                      >
                        <img src={mailpng} className="h-6 w-6" alt="Email" />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
