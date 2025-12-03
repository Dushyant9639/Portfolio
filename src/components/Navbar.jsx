import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const resumePath = "/Dushyant_Goyal_Resume..pdf";
  const handleResume = (e) => {
    e.preventDefault();

    const resumeViewLink =
      "https://drive.google.com/file/d/11rs5v1G8OBRp94k5S6EbdMf33jJloqtO/view";
    const resumeDownloadLink =
      "https://drive.google.com/uc?export=download&id=11rs5v1G8OBRp94k5S6EbdMf33jJloqtO";

    // Open in new tab
    window.open(resumeViewLink, "_blank");

    // Auto-download
    const link = document.createElement("a");
    link.href = resumeDownloadLink;
    link.download = "Dushyant_Goyal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-xl bg-black/20 border-b border-purple-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* ---- Logo + Profile Avatar ---- */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="relative">
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-purple-400/60 shadow-lg"
            />
            <div className="absolute inset-0 rounded-full blur-lg bg-purple-500/20 -z-10"></div>
          </div>

          <div>
            <h1 className="text-lg font-semibold text-white tracking-wide">
              Dushyant Goyal
            </h1>
            <p className="text-xs text-gray-300 tracking-wide">
              Full Stack Developer
            </p>
          </div>
        </motion.div>

        {/* ---- Desktop Menu ---- */}
        <div className="hidden md:flex items-center gap-8 text-gray-200 font-medium">
          <a href="#about" className="hover:text-purple-300 transition">
            About
          </a>
          <a href="#skills" className="hover:text-purple-300 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-purple-300 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-purple-300 transition">
            Contact
          </a>

          {/* Socials */}
          <a
            href="https://github.com/Dushyant9639"
            target="_blank"
            className="text-xl hover:text-purple-300 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/dushyant-goyal-b889121b3/"
            target="_blank"
            className="text-xl hover:text-purple-300 transition"
          >
            <FaLinkedin />
          </a>

          {/* ---- Resume Button ---- */}
          <button
            onClick={handleResume}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md shadow-purple-500/30 border border-purple-300/20 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition"
          >
            Resume
          </button>

          {/* className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md shadow-purple-500/30 border border-purple-300/20 hover:shadow-purple-500/50 hover:-translate-y-0.5 transition" */}
        </div>

        {/* ---- Mobile Menu Button ---- */}
        <div
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* ---- Mobile Dropdown ---- */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass bg-black/40 px-6 py-5 border-t border-purple-500/20 backdrop-blur-lg"
        >
          <a href="#about" className="block py-2 text-gray-200">
            About
          </a>
          <a href="#skills" className="block py-2 text-gray-200">
            Skills
          </a>
          <a href="#projects" className="block py-2 text-gray-200">
            Projects
          </a>
          <a href="#contact" className="block py-2 text-gray-200">
            Contact
          </a>

          <a
            href={resumePath}
            download
            className="mt-3 block w-max px-4 py-2 rounded-md bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md border border-purple-400/20"
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </nav>
  );
}
