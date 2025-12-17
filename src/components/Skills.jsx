
import React from "react";
import { motion } from "framer-motion";

// ICON IMPORTS (only supported icons)
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiPostman,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiAxios,
  SiJest,
} from "react-icons/si";

import { GiArtificialIntelligence } from "react-icons/gi";
const skillList = [
  { name: "JavaScript", icon: <SiJavascript size={30} />, cat: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript size={30} />, cat: "Frontend" },
  { name: "React.js", icon: <SiReact size={30} />, cat: "Frontend" },
  { name: "Next.js", icon: <SiNextdotjs size={30} />, cat: "Frontend" },
  { name: "Redux Toolkit", icon: <SiRedux size={30} />, cat: "Frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={30} />, cat: "Frontend" },
  { name: "HTML5", icon: <SiHtml5 size={30} />, cat: "Frontend" },
  { name: "CSS3", icon: <SiCss3 size={30} />, cat: "Frontend" },
  { name: "Vite", icon: <SiVite size={30} />, cat: "Frontend" },


  { name: "Node.js", icon: <SiNodedotjs size={30} />, cat: "Backend" },
  { name: "Express.js", icon: <SiExpress size={30} />, cat: "Backend" },
  { name: "REST APIs", icon: <SiNodedotjs size={30} />, cat: "Backend" },
  { name: "Axios", icon: <SiAxios size={30} />, cat: "Backend" },

  { name: "MongoDB", icon: <SiMongodb size={30} />, cat: "Database" },
//   { name: "MySQL", icon: <SiMysql size={30} />, cat: "Database" },
  { name: "Firebase DB", icon: <SiFirebase size={30} />, cat: "Database" },

  { name: "Gemini API", icon: <GiArtificialIntelligence size={30} />, cat: "AI" },
//   { name: "AI Chat Widgets", icon: <GiArtificialIntelligence size={30} />, cat: "AI" },
  { name: "Google Cloud AI", icon: <SiGooglecloud size={30} />, cat: "AI" },

  { name: "Git", icon: <SiGit size={30} />, cat: "Tools" },
  { name: "GitHub", icon: <SiGithub size={30} />, cat: "Tools" },
  { name: "Postman", icon: <SiPostman size={30} />, cat: "Tools" },
//   { name: "Testing (Jest)", icon: <SiJest size={30} />, cat: "Tools" },
];

export default function Skills() {
  return (
    <section id="skills" className="section py-24 relative overflow-hidden">

      {/* Background Floating Glow Icons */}
      <div className="absolute inset-0 -z-10 opacity-[0.12]">
        <div className="animate-pulse absolute top-10 left-20 text-purple-500">
          <SiReact size={80} />
        </div>
        <div className="animate-bounce absolute bottom-20 right-16 text-blue-500">
          <SiJavascript size={70} />
        </div>
        <div className="animate-pulse absolute bottom-32 left-10 text-green-500">
          <SiMongodb size={70} />
        </div>
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold text-center text-white"
      >
        Skills & Tech Stack
      </motion.h2>

      <div className="flex justify-center mt-3 mb-12">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "200px" }}
          className="h-1.5 bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"
        />
      </div>

      {/* Skill Grid (Creative + 3D + Neon Glow) */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skillList.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.03 }}
            whileHover={{ scale: 1.08, rotateX: 6, rotateY: -6 }}
            className="group relative p-6 rounded-xl glass border border-purple-500/20 shadow-lg shadow-purple-900/30 hover:shadow-purple-500/40 transition-all cursor-pointer"
          >
            {/* Neon bottom glow */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 bg-gradient-to-b from-transparent to-purple-600 transition-all duration-300"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-purple-300 group-hover:text-purple-200 transition">
                {skill.icon}
              </div>
              <p className="mt-3 text-gray-200 font-medium text-lg">
                {skill.name}
              </p>

              {/* Category badge */}
              <span className="mt-2 text-xs bg-white/10 px-3 py-1 rounded-full border border-purple-500/20 text-purple-200">
                {skill.cat}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

//Method -3 

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Icons (all supported)
// import {
//   SiJavascript,
//   SiReact,
//   SiTailwindcss,
//   SiRedux,
//   SiNodedotjs,
//   SiExpress,
//   SiMongodb,
//   SiFirebase,
//   SiMysql,
//   SiTypescript,
//   SiHtml5,
//   SiCss3,
//   SiNextdotjs,
//   SiPostman,
//   SiGit,
//   SiGithub,
//   SiAxios,
//   SiGooglecloud,
//   SiJest,
//   SiVite,
// } from "react-icons/si";

// import { GiArtificialIntelligence } from "react-icons/gi";

// // Categories
// const categories = ["All", "Frontend", "Backend", "Database", "AI", "Tools"];

// const skills = [
//   // FRONTEND
//   { name: "JavaScript", icon: SiJavascript, cat: "Frontend", level: 90 },
//   { name: "TypeScript", icon: SiTypescript, cat: "Frontend", level: 80 },
//   { name: "React", icon: SiReact, cat: "Frontend", level: 90 },
//   { name: "Next.js", icon: SiNextdotjs, cat: "Frontend", level: 75 },
//   { name: "Redux Toolkit", icon: SiRedux, cat: "Frontend", level: 85 },
//   { name: "Tailwind CSS", icon: SiTailwindcss, cat: "Frontend", level: 95 },
//   { name: "HTML", icon: SiHtml5, cat: "Frontend", level: 98 },
//   { name: "CSS", icon: SiCss3, cat: "Frontend", level: 92 },
//   { name: "Vite", icon: SiVite, cat: "Frontend", level: 90 },

//   // BACKEND
//   { name: "Node.js", icon: SiNodedotjs, cat: "Backend", level: 85 },
//   { name: "Express.js", icon: SiExpress, cat: "Backend", level: 80 },
//   { name: "REST APIs", icon: SiNodedotjs, cat: "Backend", level: 90 },
//   { name: "Axios", icon: SiAxios, cat: "Backend", level: 85 },

//   // DATABASE
//   { name: "MongoDB", icon: SiMongodb, cat: "Database", level: 90 },
//   { name: "MySQL", icon: SiMysql, cat: "Database", level: 75 },
//   { name: "Firebase", icon: SiFirebase, cat: "Database", level: 85 },

//   // AI
//   { name: "Gemini API", icon: GiArtificialIntelligence, cat: "AI", level: 80 },
//   { name: "AI Chat Widgets", icon: GiArtificialIntelligence, cat: "AI", level: 75 },
//   { name: "Google Cloud AI", icon: SiGooglecloud, cat: "AI", level: 70 },

//   // TOOLS
//   { name: "Git", icon: SiGit, cat: "Tools", level: 95 },
//   { name: "GitHub", icon: SiGithub, cat: "Tools", level: 95 },
//   { name: "Postman", icon: SiPostman, cat: "Tools", level: 92 },
//   { name: "Jest Testing", icon: SiJest, cat: "Tools", level: 70 },
// ];

// export default function Skills() {
//   const [active, setActive] = useState("All");

//   const filtered =
//     active === "All" ? skills : skills.filter((s) => s.cat === active);

//   return (
//     <section id="skills" className="py-24 relative overflow-hidden">

//       {/* Background particles */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-10 left-20 w-40 h-40 bg-purple-600/20 blur-[120px] rounded-full"></div>
//         <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-600/20 blur-[140px] rounded-full"></div>
//         <motion.div
//           animate={{ y: [-20, 20, -20] }}
//           transition={{ repeat: Infinity, duration: 10 }}
//           className="absolute left-1/2 top-10 opacity-10"
//         >
//           <SiReact size={120} className="text-cyan-400" />
//         </motion.div>
//         <motion.div
//           animate={{ y: [20, -20, 20] }}
//           transition={{ repeat: Infinity, duration: 12 }}
//           className="absolute right-1/4 bottom-10 opacity-10"
//         >
//           <SiJavascript size={100} className="text-yellow-300" />
//         </motion.div>
//       </div>

//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="text-5xl font-bold text-center text-white"
//       >
//         My Tech Superpowers 🚀
//       </motion.h2>

//       <p className="text-gray-300 text-center max-w-2xl mx-auto mt-4 text-lg">
//         A blend of frontend magic, backend logic, databases, AI, and powerful tools —  
//         everything I use to build modern, fast, intelligent applications.
//       </p>

//       {/* Category Filters */}
//       <div className="flex flex-wrap justify-center gap-4 my-12">
//         {categories.map((c) => (
//           <button
//             key={c}
//             onClick={() => setActive(c)}
//             className={`px-6 py-2 rounded-full text-sm font-medium border transition-all
//               ${
//                 active === c
//                   ? "bg-purple-600 border-purple-400 shadow-lg shadow-purple-500/40 text-white"
//                   : "bg-white/10 border-purple-500/10 text-gray-300 hover:bg-white/20"
//               }
//             `}
//           >
//             {c}
//           </button>
//         ))}
//       </div>

//       {/* Skills Grid */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={active}
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -15 }}
//           transition={{ duration: 0.35 }}
//           className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto"
//         >
//           {filtered.map((skill, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: i * 0.03 }}
//               whileHover={{ scale: 1.08, rotateX: 8, rotateY: -8 }}
//               className="relative p-6 rounded-xl bg-white/5 backdrop-blur-xl border border-purple-400/20 shadow-xl 
//                          hover:shadow-purple-500/40 transition-all cursor-pointer group"
//             >
//               {/* Gloss Shine */}
//               <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-white/40 to-transparent transition"></div>

//               {/* Icon */}
//               <div className="text-purple-300 group-hover:text-purple-200 transition mb-3">
//                 <skill.icon size={36} />
//               </div>

//               <h3 className="text-gray-200 font-semibold text-lg">
//                 {skill.name}
//               </h3>

//               {/* Category tag */}
//               <span className="text-xs mt-2 inline-block bg-white/10 px-3 py-1 rounded-full border border-purple-500/20 text-purple-200">
//                 {skill.cat}
//               </span>

//               {/* Animated Ring Level (Apple-style) */}
//               <div className="mt-4 relative">
//                 <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
//                   <motion.div
//                     initial={{ width: 0 }}
//                     whileInView={{ width: `${skill.level}%` }}
//                     transition={{ duration: 0.8, delay: 0.2 }}
//                     className="h-full bg-gradient-to-r from-purple-500 to-purple-300 rounded-full"
//                   />
//                 </div>
//                 <p className="text-xs text-gray-400 mt-1">{skill.level}%</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </AnimatePresence>
//     </section>
//   );
// }

