import React from "react";
import { motion } from "framer-motion";
import "./Languages.css";

const languages = [
  { name: "Arabic", level: "Native", percent: 100 },
  { name: "English", level: "B2", percent: 75 },
  { name: "Turkish", level: "A2", percent: 35 },
];

export default function Languages() {
  return (
    <section className="languages-section">
      <motion.h2
        className="languages-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Languages
      </motion.h2>

      <div className="languages-grid">
        {languages.map((lang, i) => (
          <motion.div
            key={i}
            className="language-card"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.5, type: "spring" }}
          >
            <div className="circle-container">
              <svg className="progress-ring" viewBox="0 0 160 160">
                <circle
                  className="progress-ring__background"
                  cx="80"
                  cy="80"
                  r="70"
                />
                <motion.circle
                  className="progress-ring__progress"
                  cx="80"
                  cy="80"
                  r="70"
                  initial={{ strokeDashoffset: 440 }}
                  animate={{
                    strokeDashoffset: 440 - (440 * lang.percent) / 100,
                  }}
                  transition={{ duration: 1.5, delay: i * 0.3 }}
                />
              </svg>
              <div className="circle-label">
                <span className="level">{lang.level}</span>
              </div>
            </div>
            <p className="language-name">{lang.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}