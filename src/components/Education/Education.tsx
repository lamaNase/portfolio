import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

const educationData = [
  {
    year: "2020-2025",
    institution: "Birzeit University - Ramallah, Palestine",
    degree: "Bachelor's degree in Computer Engineering, GPA: 85.6",
    color: "#3B82F6", // blue
  },
  {
    year: "2019-2020",
    institution: "Secondary School - Ramallah, Palestine",
    degree: "High School with 92.1 grade",
    color: "#10B981", // green
  },
  {
    year: "2017-2019",
    institution: "Amideast - Albirah, Palestine",
    degree: "English Access Microscholarship Program",
    color: "#F59E0B", // amber
  },
];

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-title">My Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            style={{ borderLeftColor: edu.color }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <div
              className="education-year"
              style={{ backgroundColor: edu.color }}
            >
              {edu.year}
            </div>
            <h3 className="education-institution">{edu.institution}</h3>
            <p className="education-degree">{edu.degree}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;