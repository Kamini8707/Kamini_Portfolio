import React from 'react'
import {
  SiLeetcode,
  SiGeeksforgeeks,
  SiCodechef,
  SiLinkedin,
  SiX,
} from "react-icons/si";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">
          Kamini Prajapati
        </h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "work" },
            { name: "Experience", id: "experience" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <SiLeetcode />,
              link: "https://leetcode.com/u/KaminiPrajapati/",
            },
            {
              icon: <SiGeeksforgeeks />,
              link: "https://www.geeksforgeeks.org/user/kaminipraj3k4m/",
            },
            {
              icon: <SiCodechef />,
              link: "https://www.codechef.com/users/kamini8707",
            },
            {
              icon: <SiX />,
              link: "https://x.com/KaminiPraj29538",
            },
            {
              icon: <SiLinkedin />,
              link: "https://www.linkedin.com/in/kamini-prajapati-5328b3253/",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Kamini Prajapati. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer
