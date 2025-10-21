import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./AboutMe.css";

export default function AboutMe() {
  const data = [
    { skill: "Front-End", level: 90 },
    { skill: "Back-End", level: 75 },
    { skill: "Problem Solving", level: 95 },
    { skill: "System Design", level: 80 },
    { skill: "Creativity", level: 85 },
  ];

  return (
    <section className="about-section">
      {/* Left Section */}
      <div className="about-left">
        <h2>About Me</h2>
        <p>
          Software Developer with strong experience in front-end and full-stack
          development. Proficient in building modern, scalable web applications
          using React, Remix, and Node.js, with practical knowledge of
          authentication workflows, client-side storage, and deployment. Solid
          foundation in computer engineering with hands-on experience in C++,
          Python, and Java. Skilled in problem-solving, optimizing performance,
          and delivering clean, maintainable code.
        </p>
      </div>

      {/* Right Section - Radar Chart */}
      <div className="about-right radar-wrapper">
        <h2>Skill Balance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
            <PolarGrid stroke="#2d3b63" />
            <PolarAngleAxis
              dataKey="skill"
              tick={{ fill: "#ffffff", fontSize: 11 }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
              tick={{ fill: "#8ab4f8", fontSize: 11 }}
            />
            <Radar
              name="Skill Level"
              dataKey="level"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.5}
              animationDuration={1200}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0b1220",
                border: "1px solid #3B82F6",
                color: "#fff",
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}