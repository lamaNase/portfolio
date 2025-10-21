import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuAlarmClock,
  LuListChecks,
  LuBrain,
} from "react-icons/lu";
import {
  FaCarSide,
  FaJava,
  FaReact,
  FaPython,
  FaNodeJs,
  FaCss3Alt,
  FaDatabase,
  FaGlobe,
  FaCogs,
  FaCommentDots,
} from "react-icons/fa";
import {
  SiAndroidstudio,
  SiRemix,
  SiFirebase,
  SiNetlify,
  SiFlask,
  SiCplusplus,
  SiQt,
  SiCmake,
  SiRender,
  SiTypescript,
} from "react-icons/si";
import "./PublicProjects.css";

const PublicProjects = () => {
  const [showModal, setShowModal] = useState(false);
  const [githubLink, setGithubLink] = useState("");

  // Helper function to map tool names to icons
  const getToolIcon = (tool) => {
    const icons = {
      "Android Studio": <SiAndroidstudio />,
      Java: <FaJava />,
      XML: <FaGlobe />,
      SQLite: <FaDatabase />,
      "REST API": <FaCogs />,
      Remix: <SiRemix />,
      TypeScript: <SiTypescript />,
      CSS: <FaCss3Alt />,
      Firebase: <SiFirebase />,
      "Node.js": <FaNodeJs />,
      Netlify: <SiNetlify />,
      "C++": <SiCplusplus />,
      Qt: <SiQt />,
      CMake: <SiCmake />,
      "Software architectur": <FaCogs />,
      Multithreading: <LuListChecks />,
      Python: <FaPython />,
      Flask: <SiFlask />,
      React: <FaReact />,
      NLP: <FaCommentDots/>,
      "Graph-based algorithms": <LuBrain />,
      Render: <SiRender />,
    };
    return icons[tool] || <FaGlobe />; // default icon
  };

  const projects = [
    {
      id: 1,
      title: "Task Management App",
      icon: <LuAlarmClock />,
      description:
        "Task Management App is a mobile solution built with Android Studio to help users organize and track their daily tasks efficiently. It includes secure authentication with sign-up, login, and enables adding, editing, deleting, and searching tasks by priority (High, Medium, Low). Users receive smart notifications and customizable reminders, while “Today’s Tasks” highlights urgent items with intuitive icons and actions. The app supports dark/light modes, and profile management, delivering a polished and accessible experience. Powered by SQLite, Shared Preferences, and REST API integration.",
      tools: ["Android Studio", "Java", "XML", "SQLite", "REST API"],
      image: "/assets/task_management_app.png",
      github:
        "https://github.com/lamaNase/Android-Laboratory-Project/tree/main",
    },
    {
      id: 2,
      title: "Tafawq Quiz App",
      icon: <LuListChecks />,
      description:
        "Tafawq Quiz App is an interactive, Arabic-language educational web app built with the powerful Remix framework. It is deployed on Netlify and uses Firebase for backend data storage, including user sessions, question content, and progress tracking. The app features full user authentication (sign up/sign in), utilizes cookies for managing user sessions, and supports dynamic question status updates. Users can practice multiple-choice questions, receive immediate feedback, view detailed answer explanations, and monitor their scores — all within a culturally adapted, right-to-left (RTL) interface tailored for Arabic-speaking learners.",
      tools: ["Remix", "TypeScript", "CSS", "Firebase", "Node.js", "Netlify"],
      image: "/assets/auth_quiz_ranker.png",
      github: "https://github.com/lamaNase/auth-quiz-ranker",
    },
    {
      id: 3,
      title: "Automotive Data Visualization",
      icon: <FaCarSide />,
      description:
        "Real-time automotive data visualization system designed to provide synchronized overview of a vehicle’s performance and surroundings. The system integrates data from multiple sensors, including cameras, GPS, IMU, speed, steering, throttle, and brake inputs, to deliver a unified real-time display of both visual and numerical insights. It features an intuitive interface that renders synchronized multi-camera views alongside continuously updated telemetry readings. A built-in interactive map, powered by Google Maps APIs, visualizes the vehicle’s current position and trajectory in real time. The system’s multi-threaded architecture ensures smooth data streaming, efficient sensor synchronization, and high-performance visualization making it a robust platform for monitoring, analysis, and research in automotive environments.",
      tools: ["C++", "Qt", "CMake", "Software architectur", "Multithreading"],
      image: "/assets/auto_data_viz.png",
      github: "https://github.com/lamaNase/AutoDataViz",
    },
    {
      id: 4,
      title: "Arabic Text Summarizer",
      icon: <LuBrain />,
      description:
        "Enhancing Extractive Graph-Based Arabic Text Summarization is a project that advances traditional graph-based summarization methods, such as TextRank, for Arabic texts by integrating semantic and statistical features. It combines embeddings from fastText and AraBERT to capture sentence meaning with statistical cues like position, length, and entropy to improve graph ranking. The system explores enhanced ranking strategies—including degree normalization, weighted centrality, and fusion-based scoring—to generate more accurate extractive summaries. Built as a full-stack web application using Flask and React, it enables real-time Arabic text summarization through a modern, user-friendly interface, bridging classical NLP with deep semantic understanding for Arabic language processing.",
      tools: [
        "Python",
        "Flask",
        "React",
        "Node.js",
        "NLP",
        "Render",
        "Graph-based algorithms",
        "Netlify",
      ],
      image: "/assets/arabic_text_summarizer.png",
      github:
        "https://github.com/lamaNase/Enhancing-Extractive-Graph-Based-Arabic-Text-Summarization",
    },
  ];

  const openGithub = () => {
    window.open(githubLink, "_blank");
    setShowModal(false);
  };

  return (
    <section className="public-projects">
      <h2 className="section-title">Public Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            className="project-card"
            key={project.id}
            whileHover={{ scale: 1.03 }}
            onClick={() => {
              setGithubLink(project.github);
              setShowModal(true);
            }}
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0 0 20px rgba(0,0,0,0.4)",
                }}
              />
            </div>

            <div className="project-content">
              <h3>
                {project.icon} {project.title}
              </h3>
              <p>{project.description}</p>

              <div className="skills">
                {project.tools.map((tool, index) => (
                  <span key={index} className="tool-item">
                    {getToolIcon(tool)} {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-card"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
            >
              <h3>View on GitHub?</h3>
              <p>Would you like to open the full project on GitHub?</p>
              <div className="modal-buttons">
                <button className="yes" onClick={openGithub}>
                  Yes, open it
                </button>
                <button className="no" onClick={() => setShowModal(false)}>
                  No, cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PublicProjects;