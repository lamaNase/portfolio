import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const experiences = [
  {
    company: "Imagry | Autonomous Driving",
    role: "Software Engineer Intern",
    duration: "Aug 2024 - Sep 2024",
    description: "Developed multi-threaded C++ programs for real-time car sensor data synchronization and visualization. Applied key design patterns and collaborated using Git to enhance performance and scalability.",
    color: "rgba(168, 85, 247, 0.4)", // purple with 40% opacity
  },
  {
    company: "Quiz Plus",
    role: "Frontend Developer Intern",
    duration: "Feb 2025 - May 2025",
    description:
      "Built interactive web apps using React and Remix with secure authentication workflows. Implemented SPA and SSR features to improve speed, usability, and overall user experience.",
    color: "rgba(59, 130, 246, 0.4)", // blue with 40% opacity
  },
];

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 className="experience-title">My Experience</h2>

      <div className="experience-cards">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="experience-card"
            style={{ backgroundColor: exp.color }}
          >
            <motion.div
              className="circle-bg circle-top"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
            <motion.div
              className="circle-bg circle-bottom"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 5 }}
            />

            <h3>{exp.role}</h3>
            <p className="role">{exp.company}</p>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;