// import React from "react";
// import { motion } from "framer-motion";
// import { FiExternalLink, FiGithub } from "react-icons/fi";

// const projects = [
//   {
//     title: "Health Tracker App",
//     desc: "A responsive habit & medication tracking system with charts, filters, progress analytics, and localStorage as mock DB.",
//     tech: ["JavaScript", "HTML", "CSS", "Charts", "LocalStorage"],
//     live: "https://illustrious-torte-a13405.netlify.app/",
//     img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     title: "Medication Management Tool",
//     desc: "AI-powered medication reminder system with Gemini integration, snooze notifications, analytics, badges & drag-and-drop layouts.",
//     tech: ["React", "Tailwind", "Gemini API", "AI", "LocalStorage"],
//     live: "https://prescription-and-medication-managem-jet.vercel.app/",
//     img: "https://images.unsplash.com/photo-1580281657527-47dffbf6f43c?auto=format&fit=crop&w=900&q=80",
//   },
//   {
//     title: "Gemini Chat Widget",
//     desc: "An embeddable AI chat widget built with Gemini 2.5 Flash model, context API, persistent history & typing animation.",
//     tech: ["React", "Tailwind", "Gemini API", "Context API"],
//     live: "https://gemini-chat-widget.vercel.app/",
//     img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="py-24 relative">
//       {/* Background gradient glows */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600/20 blur-[150px] rounded-full"></div>
//         <div className="absolute bottom-10 right-20 w-72 h-72 bg-blue-600/20 blur-[150px] rounded-full"></div>
//       </div>

//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="text-5xl font-bold text-center text-white"
//       >
//         Featured Projects 💡
//       </motion.h2>

//       <p className="text-gray-300 text-center max-w-3xl mx-auto mt-4 text-lg">
//         A blend of problem-solving, clean architecture, and modern UI.  
//         Each project reflects my focus on performance, UX, and real-world impact.
//       </p>

//       <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 max-w-7xl mx-auto mt-16 px-4">
//         {projects.map((p, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, scale: 0.8, y: 20 }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: i * 0.15 }}
//             whileHover={{ scale: 1.03 }}
//             className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-purple-400/20 shadow-xl hover:shadow-purple-500/40 transition-all"
//           >
//             {/* Image */}
//             <div className="overflow-hidden relative">
//               <motion.img
//                 src={p.img}
//                 alt={p.title}
//                 className="w-full h-52 object-cover opacity-90"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.6 }}
//               />

//               {/* Gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
//             </div>

//             {/* Content */}
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-white">{p.title}</h3>

//               <p className="text-gray-300 mt-2 text-sm leading-relaxed">{p.desc}</p>

//               {/* Tech Tags */}
//               <div className="flex flex-wrap gap-2 mt-4">
//                 {p.tech.map((t, idx) => (
//                   <span
//                     key={idx}
//                     className="px-3 py-1 text-xs rounded-full bg-white/10 border border-purple-500/20 text-purple-200"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {/* Buttons */}
//               <div className="flex gap-4 mt-6">
//                 <a
//                   href={p.live}
//                   target="_blank"
//                   className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-purple-600/80 hover:bg-purple-600 text-white transition-all shadow-md"
//                 >
//                   <FiExternalLink /> Live Demo
//                 </a>

//                 <a
//                   href="#"
//                   className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-gray-200 border border-purple-400/10 transition-all"
//                 >
//                   <FiGithub /> Code
//                 </a>
//               </div>
//             </div>

//             {/* Glow border effect */}
//             <div className="absolute inset-0 border-2 border-transparent hover:border-purple-500/40 rounded-2xl transition-all"></div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

//Method -2

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

// const projectData = [
//   {
//     title: "Health Tracker App",
//     desc: "A full habit tracking ecosystem with charts, analytics, progress visualization, sorting/filtering, and local data persistence.",
//     longDesc:
//       "A smart habit-tracking platform with integrated daily checks, progress analytics, a weekly bar chart, sorting & filtering, and responsive UI. Uses localStorage as a mock database. Designed with clean UX, minimal friction, and a focus on sustainable habit-building.",
//     tech: ["JavaScript", "HTML", "CSS", "Charts.js", "LocalStorage"],
//     live: "https://illustrious-torte-a13405.netlify.app/",
//     code: "",
//     image:
//       "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
//   },

//   {
//     title: "Medication Management Tool",
//     desc: "AI-powered medication adherence system with Gemini integration, badges, analytics & smart reminders.",
//     longDesc:
//       "A complete medication management tool featuring AI insights powered by Gemini, snooze-enabled reminders, badges for consistent adherence, drag-and-drop customization, and rich analytics. Built with React + Tailwind and persists all data locally.",
//     tech: ["React", "Tailwind", "Gemini API", "AI", "LocalStorage"],
//     live: "https://prescription-and-medication-managem-jet.vercel.app/",
//     code: "",
//     image:
//       "https://images.unsplash.com/photo-1580281657527-47dffbf6f43c?auto=format&fit=crop&w=900&q=80",
//   },

//   {
//     title: "Gemini Chat Widget",
//     desc: "Embeddable AI chat widget with typing animation, retry logic, persistent chat, and Gemini 2.5 Flash model.",
//     longDesc:
//       "This developer-friendly widget uses Gemini 2.5 Flash to provide an AI-powered embedded assistant. Includes global chat context, persistent local history, typing animation, retry logic, and clean UI. Can be embedded anywhere with a single script.",
//     tech: ["React", "Tailwind", "Gemini API", "Context API"],
//     live: "https://gemini-chat-widget.vercel.app/",
//     code: "",
//     image:
//       "https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&fit=crop&w=1200&q=80",
//   },
// ];

// export default function Projects() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <section id="projects" className="relative py-28">

//       {/* 🔥 Neon Grid Background */}
//       <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),rgba(0,0,0,0.8))]"></div>
//       <div className="absolute inset-0 -z-10 opacity-20 bg-[url('https://i.ibb.co/vP6k8ts/grid.png')] bg-cover"></div>

//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="text-center text-5xl font-extrabold text-white"
//       >
//         <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//           Featured Work
//         </span>{" "}
//         🚀
//       </motion.h2>

//       <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
//         Where engineering meets creativity — crafted with precision, performance, and passion.
//       </p>

//       {/* Project Grid */}
//       <div className="max-w-7xl mx-auto mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-3 px-4">
//         {projectData.map((p, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             whileHover={{ scale: 1.04, rotateX: 5, rotateY: -5 }}
//             transition={{ duration: 0.4 }}
//             onClick={() => setSelected(p)}
//             className="relative cursor-pointer rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:shadow-purple-500/50 transition-all"
//           >
//             {/* Image */}
//             <div className="relative overflow-hidden">
//               <motion.img
//                 src={p.image}
//                 className="h-56 w-full object-cover opacity-90"
//                 whileHover={{ scale: 1.1 }}
//                 transition={{ duration: 0.7 }}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
//             </div>

//             {/* Content */}
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-white">{p.title}</h3>
//               <p className="text-gray-300 mt-2 text-sm">{p.desc}</p>

//               {/* Tech Tags */}
//               <div className="flex flex-wrap mt-4 gap-2">
//                 {p.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="text-xs px-3 py-1 bg-purple-500/10 border border-purple-400/20 text-purple-200 rounded-full"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Shine Effect */}
//             <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 duration-300"></div>
//           </motion.div>
//         ))}
//       </div>

//       {/* 🔥 MODAL (Project Expanded View) */}
//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 z-50 backdrop-blur-xl bg-black/70 flex items-center justify-center p-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               className="max-w-2xl w-full bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl relative"
//             >
//               {/* Close Button */}
//               <button
//                 onClick={() => setSelected(null)}
//                 className="absolute top-6 right-6 text-white/60 hover:text-white"
//               >
//                 <FiX size={24} />
//               </button>

//               {/* Modal Content */}
//               <img
//                 src={selected.image}
//                 className="rounded-xl mb-6 shadow-xl"
//               />

//               <h3 className="text-3xl font-bold text-white">
//                 {selected.title}
//               </h3>

//               <p className="text-gray-300 mt-3 leading-relaxed">
//                 {selected.longDesc}
//               </p>

//               <div className="flex flex-wrap gap-2 mt-4">
//                 {selected.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="px-3 py-1 bg-purple-500/10 border border-purple-300/20 text-purple-200 rounded-full text-xs"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex gap-4 mt-6">
//                 <a
//                   href={selected.live}
//                   target="_blank"
//                   className="px-5 py-2 bg-purple-600 rounded-lg text-white flex items-center gap-2 hover:bg-purple-700"
//                 >
//                   <FiExternalLink /> Live Demo
//                 </a>

//                 <a
//                   href={selected.code}
//                   target="_blank"
//                   className="px-5 py-2 bg-white/10 border border-white/20 rounded-lg text-white flex items-center gap-2 hover:bg-white/20"
//                 >
//                   <FiGithub /> Code
//                 </a>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// Method -3 
// src/components/Projects.jsx
// src/components/Projects.jsx
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

/*
  Final Projects (Style C: Hybrid Clean + Neon Glow)
  - Stable image URLs used (if you prefer local images, drop them into /public and update the `imageLocal` field)
  - GitHub links wired (from your provided repos)
*/

const projectData = [
  {
    id: 1,
    title: "Health Tracker App",
    short: "Habit tracking + analytics with weekly charts & progress insights.",
    long:
      "A polished habit & health tracker with weekly visualizations, sorting, filtering, and persistent storage. Focused on UX, accessibility and meaningful analytics.",
    tech: ["HTML","CSS","JavaScript", "Charts", "LocalStorage"],
    live: "https://illustrious-torte-a13405.netlify.app/",
    code: "https://github.com/Dushyant9639/Health_App",
    imageRemote:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 2,
    title: "Medication Management Tool",
    short: "AI reminders, badges, analytics & drag/drop customization.",
    long:
      "AI-powered medication management featuring smart reminders, Gemini insights, streak badges, drag/drop layout and local persistence to respect user privacy.",
    tech: ["HTML","CSS","JavaScript", "React", "Tailwind", "Gemini API", "LocalStorage"],
    live: "https://prescription-and-medication-managem-jet.vercel.app/",
    code:
      "https://github.com/Dushyant9639/Prescription-and-Medication-Management-Tool",
    imageRemote:
      "https://cdn.dribbble.com/userupload/36997899/file/original-7e4399f52ebf41b9993fa00ccbdc433f.png?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: 3,
    title: "Gemini Chat Widget",
    short: "Embeddable AI chat widget with context, persistence & typing.",
    long:
      "Embeddable Gemini-based chat widget with persistent history, context-awareness, retry logic and a simple API for developer integration.",
    tech: ["HTML","CSS","JavaScript","React", "Tailwind", "Gemini API", "Context API"],
    live: "https://gemini-chat-widget.vercel.app/",
    code: "https://github.com/Dushyant9639/Gemini-Chat-Widget",
    imageRemote:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1400&q=80",
  },
];


/* Card component with pointer tilt and parallax layers */
function ProjectCard({ p, onOpen }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, tx: 0, ty: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1
      const ry = (px - 0.5) * 12; // rotateY
      const rx = -(py - 0.5) * 10; // rotateX
      const tx = (px - 0.5) * 10; // translate x subtle
      const ty = (py - 0.5) * 8; // translate y subtle
      setTilt({ rx, ry, tx, ty });
    }
    function onLeave() {
      setTilt({ rx: 0, ry: 0, tx: 0, ty: 0 });
    }
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointerdown", () => setHovered(true));
    el.addEventListener("pointerup", () => setHovered(false));
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  // choose local if present else remote
  const imageSrc = (() => {
    // attempt local image (public) first - this keeps things stable if you add your own images
    if (p.imageLocal) return p.imageLocal;
    return p.imageRemote;
  })();

  return (
    <motion.article
      ref={ref}
      layout
      onClick={() => onOpen(p)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ z: 30 }}
      transition={{ duration: 0.45 }}
      className="relative cursor-pointer rounded-2xl overflow-hidden bg-gradient-to-br from-white/3 to-white/6 backdrop-blur-3xl border border-white/8 shadow-2xl"
      style={{
        transform: `perspective(1200px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translate3d(${tilt.tx}px, ${tilt.ty}px, 0)`,
      }}
    >
      {/* IMAGE LAYER */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={imageSrc}
          alt={p.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? "scale-[1.05]" : "scale-100"}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        />
        {/* soft vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 to-transparent" />
        {/* small tag */}
        <div className="absolute left-4 top-4 px-3 py-1 rounded-full bg-white/6 border border-white/8 text-xs text-white/90 backdrop-blur-sm">
          Featured
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
          {p.title}
        </h3>
        <p className="text-gray-300 mt-2 text-sm leading-relaxed">{p.short}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-700/10 to-pink-400/6 border border-purple-400/10 text-purple-200"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 text-white shadow-md"
          >
            <FiExternalLink /> Live
          </a>

          <a
            href={p.code}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/6 border border-white/8 text-white"
          >
            <FiGithub /> Code
          </a>
        </div>
      </div>

      {/* Glass beam */}
      <div className="absolute left-[-40%] top-[-40%] w-[180%] h-[180%] pointer-events-none glass-beam" />

      {/* neon edge sweep */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="neon-edge" />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const containerRef = useRef(null);

  // subtle parallax for background using custom properties
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section id="projects" ref={containerRef} className="relative py-28 overflow-hidden">
      {/* background layers */}
      <div className="absolute inset-0 -z-30">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent 40%)]"
          style={{ transform: "translate3d(var(--mx), var(--my), 0)" }}
        />
        <div className="absolute inset-0 grid-pattern opacity-18 transform-gpu" style={{ transform: "translate3d(calc(var(--mx) * -0.45), calc(var(--my) * -0.45), 0)" }} />
        {/* floating faint orbs */}
        <motion.div className="absolute left-10 top-12 w-44 h-44 rounded-full blur-[90px] bg-purple-600/20" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 8 }} />
        <motion.div className="absolute right-10 bottom-10 w-72 h-72 rounded-full blur-[110px] bg-blue-500/18" animate={{ y: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 10 }} />
      </div>

      {/* header */}
      <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} className="text-center text-5xl font-extrabold text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>{" "}
        Showcase
      </motion.h2>

      <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
        Selected projects that showcase product thinking, solid engineering and polished UI.
      </p>

      {/* grid */}
      <div className="max-w-7xl mx-auto mt-16 px-4 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {projectData.map((p, i) => (
          <ProjectCard key={p.id} p={p} onOpen={(proj) => setSelected(proj)} />
        ))}
      </div>

      {/* modal */}
      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/72 backdrop-blur-sm" onClick={() => setSelected(null)} />
            <motion.div initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 12, scale: 0.98 }} transition={{ duration: 0.2 }} className="relative max-w-4xl w-full bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl">
              <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-white/80 hover:text-white"><FiX size={22} /></button>

              {/* header + image */}
              <div className="grid md:grid-cols-2 gap-6">
                <img src={selected.imageLocal || selected.imageRemote} alt={selected.title} className="w-full h-64 object-cover rounded-xl shadow-lg" />
                <div>
                  <h3 className="text-2xl font-bold text-white">{selected.title}</h3>
                  <p className="text-gray-300 mt-3">{selected.long}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {selected.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-700/10 to-pink-400/6 border border-purple-400/10 text-purple-200 text-xs">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-6">
                    <a href={selected.live} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-400 text-white">Open Live</a>
                    <a href={selected.code} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-lg bg-white/6 border border-white/10 text-white">View Code</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
