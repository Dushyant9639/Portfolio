import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaLightbulb,
  FaRocket,
  FaCode,
  FaGraduationCap,
  FaStar,
  FaLaptopCode,
  FaCheckCircle,
  FaChartLine,
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="section py-24 relative overflow-hidden">

      {/* Floating Glow Blobs */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-purple-700/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white tracking-wide"
        >
          About Me
        </motion.h2>

        {/* Animated underline */}
        <div className="flex justify-center mb-12 mt-2">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "140px" }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"
          ></motion.div>
        </div>

        {/* New Executive Summary */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center"
        >
          I'm <span className="text-purple-300 font-semibold">Dushyant Goyal</span>, 
          a MERN Stack Developer passionate about building clean, modern, scalable, and 
          user-friendly digital experiences.  
          I combine <span className="text-purple-200 font-medium">corporate-level discipline</span> 
          with <span className="text-purple-200 font-medium">creative problem-solving</span> 
          to craft products that feel smooth, fast, and intelligent.
        </motion.p>

        {/* Core Strengths */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-center text-purple-200 mt-20"
        >
          Core Strengths
        </motion.h3>

        <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">

          {[
            {
              icon: <FaUserTie className="text-purple-300 text-3xl" />,
              title: "Professional Mindset",
              desc: "Disciplined execution, structured planning, and detail-oriented workflow.",
            },
            {
              icon: <FaLightbulb className="text-yellow-300 text-3xl" />,
              title: "Creative Problem Solving",
              desc: "Blend of logic & creativity to craft efficient human-centered solutions.",
            },
            {
              icon: <FaRocket className="text-blue-300 text-3xl" />,
              title: "Fast Execution",
              desc: "Fast learner with the ability to ship features quickly without losing quality.",
            },
            {
              icon: <FaCode className="text-green-300 text-3xl" />,
              title: "Clean Code",
              desc: "Readable, maintainable, scalable — I follow modern software best practices.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="glass p-6 rounded-xl border border-purple-600/20 shadow-lg shadow-purple-900/20"
            >
              {item.icon}
              <h4 className="text-lg font-semibold text-white mt-3">{item.title}</h4>
              <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}

        </div>

        {/* ⭐ Achievements Section */}
        <h3 className="text-3xl font-semibold text-center text-purple-200 mt-24">
          Key Achievements
        </h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">

          {[
            {
              icon: <FaStar className="text-yellow-400 text-3xl" />,
              title: "Build AI integrated MedManager",
              desc: "Built an AI-powered medication model to help mankind so that noone misses their doses.",
            },
            {
              icon: <FaChartLine className="text-blue-300 text-3xl" />,
              title: "Rapid Learning Growth",
              desc: "Shifted from non-CS background to MERN development with strong practical skills.",
            },
            {
              icon: <FaLaptopCode className="text-purple-300 text-3xl" />,
              title: "Multiple Real-world Projects",
              desc: "Developed polished full-stack projects with clean UI and strong backend logic.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="glass p-6 rounded-xl border border-purple-600/20 shadow-lg shadow-purple-900/20"
            >
              {item.icon}
              <h4 className="text-lg font-semibold text-white mt-3">{item.title}</h4>
              <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
            </motion.div>
          ))}

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-400 italic text-center mt-16"
        >
          “Building, learning, and improving — every single day.”
        </motion.p>
      </div>
    </section>
  );
}

