//Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import dockerLogo from "./assets/tech_logo/docker.png";
import kubernetesLogo from "./assets/tech_logo/kubernetes.png";


// Experience Section Logo's
import awsLogo from "./assets/company_logo/Aws.png";
import deloitteLogo from "./assets/company_logo/Deloitte.png";
import softproLogo from "./assets/company_logo/Softpro.png";

// Education Section Logo's
import bietLogo from "./assets/education_logo/biet.jpg"
import rpmLogo from "./assets/education_logo/RPM.png"

// Project Section Image's
import hotelLogo from "./assets/project_logo/HotelReservation.png";
import netflixLogo from "./assets/project_logo/NetflixClone.png";
import NQueenLogo from "./assets/project_logo/NQueen.png";
import quizLogo from "./assets/project_logo/QuizApp.png";
import tictactoeLogo from "./assets/project_logo/TicTacToe.png";
import weatherLogo from "./assets/project_logo/WeatherApp.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Docker", logo: dockerLogo},
      { name: "Kubernetes", logo: kubernetesLogo}
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: softproLogo,
    role: "Fullstack Developer",
    company: "Softpro India",
    date: "July 2025 - Sept 2025",
    desc: "Developed HealthNexus, a full-stack Hospital Information System that streamlined doctor–patient–admin communication. Implemented modules for patient/doctor management, appointment scheduling, secure authentication, and email integration using React.js, Node.js, Express, and MongoDB.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Bootstrap",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
    ],
  },
  {
    id: 1,
    img: deloitteLogo,
    role: " Deloitte Australia Cyber Job Simulation (Forage) - Virtual",
    company: "Agumentik Group of Companies",
    date: "July 2025",
    desc: " Analyzed web activity logs to identify suspicious activity in a simulated cybersecurity breach. Provided structured reports and recommendations to support client risk mitigation.",
    skills: [
      "Cybersecurity Analysis",
      "Threat Detection",
      "Risk Assessment",
      "Report Writing",
      "Python",
    ],
  },
  {
    id: 2,
    img: awsLogo,
    role: " Amazon ML Summer of School 2025– Generative AI with AWS",
    company: "Amazon",
    date: "June 2025 - July 2025",
    desc: "Completed a structured program covering core AI/ML topics, including LLMs, transformer models, prompt engineering, and ethical implications. Built projects: AWS ML Foundations Badge, Amazon PartyRock App. Gained insights into real-world applications and policy considerations of Generative AI.",
    skills: [
      "AI",
      "ML",
      "Amazon Sagemaker",
      "AWS PartyRock",
      "AWS Lambda",
      "LLM",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: bietLogo,
    school: "Bundelkhand Institute of Engineering and Technology , Jhansi",
    date: "October 2022 - July 2026",
    grade: "8.77 CGPA",
    desc: "Pursuing a Bachelor of Technology in Information Technology, currently in the final year with a strong academic record and hands-on experience in software development and projects.",
    degree: "Bachelor of Technology - BTech",
  },
  {
    id: 1,
    img: rpmLogo,
    school: "RPM Academy Kauriram Gorakhpur",
    date: "April 2020 - May 2021",
    grade: "95%",
    desc: "I completed my class 12 education from RPM Academy school , under the CISCE board,where I studied Physics, Chemistry, and Mathematics (PCM) ",
    degree: "ISC(XII)-PCM",
  },
  {
    id: 2,
    img: rpmLogo,
    school: "RPM Academy Kauriram Gorakhpur",
    date: "Apr 2018 - May 2019",
    grade: "95.33%",
    desc: "I completed my class 10 education from RPM Academy Kauriram Gorakhpur, under the CISCE board .",
    degree: "ICSE(X), Science",
  },
];



export const projects = [
  {
    id: 0,
    title: "Weather App",
    description:
      "A modern, responsive weather application built with React, Vite, and Tailwind CSS. Integrates the OpenWeather API to provide real-time weather data, including temperature, humidity, wind speed, and cloud cover for any city.",
    image: weatherLogo,
    tags: ["React", "Vite", "Tailwind CSS", "OpenWeather API"],
    github: "https://github.com/Kamini8707/Weather-App",
    webapp: "https://weather-app-three-beta-12.vercel.app/",
  },
  {
    id: 1,
    title: "N-Queen Visualizer",
    description:
      "An interactive web application built with HTML, CSS, and JavaScript to visualize solutions for the N-Queens problem using a backtracking algorithm. Users can set the board size, control animation speed, and watch all possible arrangements dynamically displayed on a responsive chessboard.",
    image: NQueenLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Algorithm Visualization",
      "Backtracking",
    ],
    github: "https://github.com/Kamini8707/N-Queen-Visualizer",
    webapp: "https://kamini8707.github.io/N-Queen-Visualizer/",
  },
  {
    id: 2,
    title: "Netflix Clone",
    description:
      "A complete, responsive front-end clone of the Netflix landing page (India). The project was built using pure HTML and CSS to practice foundational web development skills, semantic structure, and modern responsive design techniques. It accurately replicates the hero section, feature blocks, the expandable FAQ section, and the footer.",
    image: netflixLogo,
    tags: [ "HTML5",
        "CSS3",
        "Responsive Design",
        "Flexbox",
        "Grid",
        "Front-End Clone",
    ],
    github: "https://github.com/Kamini8707/Netflix_Clone",
    webapp: "https://kamini8707.github.io/Netflix_Clone/",
  },
  {
    id: 3,
    title: "Hotel Room Reservation App",
    description:
      "A full-stack hotel booking system with 97 rooms across 10 floors, featuring smart room allocation to minimize guest travel time, booking visualization, and occupancy controls. Built with React, Node.js, and Express, deployed on Netlify and Render.",
    image: hotelLogo,
    tags: ["React", "Vite", "Node.js", "Express", "REST API", "CSS"],
    github: "https://github.com/Kamini8707/hotel-reservation-app",
    webapp: "https://hotel-reservation-app.netlify.app/",
  },
  {
    id: 4,
    title: "Tic Tac Toe Game",
    description:
      "An interactive Tic Tac Toe game built with HTML, CSS, and JavaScript, enhanced with sound effects and celebratory animations. Features classic two-player gameplay, instant feedback on moves, and a responsive design for smooth play across devices.",
    image: tictactoeLogo,
    tags: ["HTML", "CSS", "JavaScript", "Game Development", "Animations"],
    github: "https://github.com/Kamini8707/Tic-Tac-Toe",
    webapp: "https://kamini8707.github.io/Tic-Tac-Toe/",
  },
];