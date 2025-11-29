// import React from "react";
// import { motion } from "framer-motion";
// import { FaUserTie, FaLightbulb, FaRocket, FaCode } from "react-icons/fa";

// export default function About() {
//   return (
//     <section id="about" className="section py-20 relative overflow-hidden">

//       {/* Decorative blobs */}
//       <div className="absolute top-10 left-0 w-60 h-60 bg-purple-600/20 blur-[100px] rounded-full -z-10"></div>
//       <div className="absolute bottom-10 right-0 w-60 h-60 bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>

//       <div className="max-w-6xl mx-auto px-6">

//         {/* Heading */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-bold text-center text-white drop-shadow-[0_0_20px_rgba(139,92,246,0.15)]"
//         >
//           About Me
//         </motion.h2>

//         {/* Underline */}
//         <div className="flex justify-center">
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "120px" }}
//             transition={{ duration: 0.8 }}
//             className="h-1.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full mt-3 mb-10"
//           ></motion.div>
//         </div>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center"
//         >
//           I'm a <span className="text-purple-300 font-semibold">Full Stack Web Developer </span> 
//           specializing in building scalable, intuitive and modern web applications using the{" "}
//           <span className="text-purple-300 font-semibold">MERN stack</span>.
//           I love enhancing user experience, integrating AI features and writing 
//           <span className="text-purple-200 font-medium"> clean, maintainable, and production-ready code</span>.
//           <br /><br />
//           My approach thrives on a balance of <span className="text-purple-300">technical precision</span>, 
//           <span className="text-purple-300">creative thinking</span>, and 
//           <span className="text-purple-300"> problem-solving</span>.  
//           I enjoy converting ideas into digital experiences that are 
//           fast, reliable, and user-friendly.
//         </motion.p>

//         {/* Core Strengths Section */}
//         <motion.h3
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl font-semibold text-center text-purple-200 mt-16"
//         >
//           Core Strengths
//         </motion.h3>

//         <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mt-10 max-w-5xl mx-auto">
          
//           {/* Card 1 */}
//           <motion.div
//             whileHover={{ y: -6 }}
//             className="glass p-6 rounded-xl border border-purple-600/20 shadow-lg shadow-purple-900/20"
//           >
//             <FaUserTie className="text-purple-300 text-3xl mb-3" />
//             <h4 className="text-lg font-semibold text-white">Professional Mindset</h4>
//             <p className="text-sm text-gray-300 mt-2">
//               Strong work ethic, disciplined execution, and attention to detail.
//             </p>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div
//             whileHover={{ y: -6 }}
//             className="glass p-6 rounded-xl border border-purple-600/20 shadow-lg shadow-purple-900/20"
//           >
//             <FaLightbulb className="text-yellow-300 text-3xl mb-3" />
//             <h4 className="text-lg font-semibold text-white">Creative Problem Solving</h4>
//             <p className="text-sm text-gray-300 mt-2">
//               Innovative ideas that blend creativity with practical solutions.
//             </p>
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div
//             whileHover={{ y: -6 }}
//             className="glass p-6 rounded-xl border border-purple-600/20 shadow-lg shadow-purple-900/20"
//           >
//             <FaRocket className="text-blue-300 text-3xl mb-3" />
//             <h4 className="text-lg font-semibold text-white">Fast Execution</h4>
//             <p className="text-sm text-gray-300 mt-2">
//               Ability to build and ship features quickly while maintaining quality.
//             </p>
//           </motion.div>

//           {/* Card 4 */}
//           <motion.div
//             whileHover={{ y: -6 }}
//             className="glass p-6 rounded-xl border border-purple-600/20 shadow-lg shadow-purple-900/20"
//           >
//             <FaCode className="text-green-300 text-3xl mb-3" />
//             <h4 className="text-lg font-semibold text-white">Clean Code Practices</h4>
//             <p className="text-sm text-gray-300 mt-2">
//               Focus on readability, maintainability & long-term scalability.
//             </p>
//           </motion.div>
//         </div>

//         {/* fun mini signature */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-sm text-gray-400 italic text-center mt-14"
//         >
//           “Learning, building, and growing — one project at a time.”
//         </motion.p>
//       </div>
//     </section>
//   );
// }

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

        {/* Experience Timeline */}
        {/* <h3 className="text-3xl font-semibold text-center text-purple-200 mt-24">
          Journey & Experience
        </h3>

        <div className="max-w-3xl mx-auto mt-12 border-l border-purple-500/30 pl-6 space-y-10"> */}

          {/* Item 1 */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <span className="absolute -left-3 top-1 w-3 h-3 bg-purple-400 rounded-full"></span>
            <h4 className="text-xl text-white font-semibold">
              B.Tech Biotechnology – Amity University (2024)
            </h4>
            <p className="text-gray-400 mt-1">
              Developed strong analytical thinking — foundation for becoming a problem-solving engineer.
            </p>
          </motion.div> */}

          {/* Item 2 */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <span className="absolute -left-3 top-1 w-3 h-3 bg-purple-400 rounded-full"></span>
            <h4 className="text-xl text-white font-semibold">
              MERN Stack Transition (2024–2025)
            </h4>
            <p className="text-gray-400 mt-1">
              Mastered JavaScript, Node.js, Express, MongoDB, React, API building, and full-stack workflows.
            </p>
          </motion.div> */}

          {/* Item 3 */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <span className="absolute -left-3 top-1 w-3 h-3 bg-purple-400 rounded-full"></span>
            <h4 className="text-xl text-white font-semibold">
              Built Multiple Production-Ready Projects (2025)
            </h4>
            <p className="text-gray-400 mt-1">
              AI-powered chat widget, real-world web apps, and responsive UI with animations.
            </p>
          </motion.div> */}

        {/* </div> */}

        {/* What I'm Doing Now
        <h3 className="text-3xl font-semibold text-center text-purple-200 mt-24">
          What I'm Currently Working On
        </h3> */}

        {/* <div className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-6">

          {[
            "Enhancing AI chat widget with more intelligence & context awareness",
            "Learning advanced backend (queues, Redis caching, clean architecture)",
            "Building 2 new portfolio-level MERN projects",
            "Improving UI/UX skills (Glassmorphism + Animations)",
          ].map((task, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 6 }}
              className="flex items-start gap-3 glass p-4 rounded-lg border border-purple-600/20"
            >
              <FaCheckCircle className="text-green-400 text-xl mt-1" />
              <p className="text-gray-300">{task}</p>
            </motion.div>
          ))}

        </div> */}

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

