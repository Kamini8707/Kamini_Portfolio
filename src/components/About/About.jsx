import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";



function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi,I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Kamini Prajapati
          </h2>
          {/* Skills heading with typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={["FullStack Developer", "Coder", "Software Engineer"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            ></ReactTypingEffect>
          </h3>

          {/* about me Para */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate Full Stack Developer skilled in building scalable
            and user-friendly web applications with React, Node.js, Express, and
            MongoDB. With a strong foundation in Data Structures and Algorithms
            (DSA), I excel at problem-solving and writing efficient code. I am
            committed to continuous learning and applying my skills to create
            impactful solutions.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1v44H2ZIIeV62T--hWep7zAGYNvRPAIPS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Kamini Prajapati"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}

export default About
