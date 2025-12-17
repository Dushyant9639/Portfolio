import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";

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
