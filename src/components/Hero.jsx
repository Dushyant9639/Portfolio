import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

export default function Hero() {
  const resumePath = "/Dushyant Goyal_Resume.pdf";

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center justify-center py-16 relative overflow-hidden"
    >
      {/* BACKGROUND DECOR */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Blobs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-72 h-72 bg-blue-500/20 blur-[130px] rounded-full animate-[pulse_4s_ease_in_out_infinite]"></div>

        {/* Creative Floating Shapes */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: [0, -25, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl rotate-12 opacity-20 top-[20%] left-[15%]"
        ></motion.div>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: [0, 25, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 bottom-[30%] right-[20%]"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-300 text-sm mb-4 shadow-md shadow-green-500/10">
            <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
            Available for Work
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
              Dushyant Goyal
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-1 font-medium">
            Full Stack Web Developer
          </h2>

          {/* Fun Stylish Underline */}
          <div className="w-40 h-1.5 bg-gradient-to-r from-purple-400 to-purple-200 rounded-full mt-2 mb-4"></div>

          {/* Typing animation */}
          <div className="mt-4 text-xl text-purple-200 font-medium">
            <TypeAnimation
              sequence={[
                "Transforming Ideas into Scalable Applications 💡",
                1500,
                "Building with MERN + AI Integrations ⚡",
                1500,
                "Designing Clean, Modern User Experiences 🎨",
                1500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-300 leading-relaxed max-w-xl">
            I build scalable web solutions using the{" "}
            <span className="text-purple-300 font-semibold">MERN Stack</span>  
            while integrating modern AI capabilities with Gemini API.  
            My work balances precision, performance, and creativity.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href={resumePath}
              download
              className="px-6 py-3 rounded-xl bg-gradient-to-br from-purple-600 to-purple-500 text-white shadow-lg border border-purple-300/20 hover:shadow-purple-500/40 transition"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-purple-400/40 text-purple-200 hover:bg-purple-400/10 transition backdrop-blur-lg"
            >
              View Projects
            </a>
          </div>

          {/* Tech Icons Row */}
          <div className="mt-10 flex items-center gap-6 text-purple-300">
            <SiJavascript size={28} />
            <SiReact size={28} />
            <SiNodedotjs size={28} />
            <SiMongodb size={28} />
            <SiTailwindcss size={28} />
            <SiExpress size={28} />
          </div>

          {/* Signature */}
          <p className="mt-10 text-gray-400 italic text-sm">
            “Coding with creativity, structure, and purpose.”
          </p>
        </motion.div>

        {/* RIGHT: PHOTO WITH PARALLAX EFFECT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center md:justify-end group"
        >
          {/* Glowing Outer Ring */}
          <div className="absolute w-80 h-80 rounded-full bg-purple-500/20 blur-3xl -z-10"></div>

          {/* Profile Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-400/60 shadow-lg shadow-purple-600/40 backdrop-blur-xl"
          >
            <motion.img
              src="/profile.jpg"
              alt="profile"
              className="w-full h-full object-cover rounded-full"
            //   animate={{ y: [0, -12, 0] }}
            //   transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Floating Creative Icons */}
          {/* <motion.div
            className="absolute -left-6 top-10 p-3 rounded-full bg-black/40 backdrop-blur-md border border-purple-400/20"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
          >
            <SiReact size={28} className="text-blue-300" />
          </motion.div> */}

          {/* <motion.div
            className="absolute -right-6 bottom-10 p-3 rounded-full bg-black/40 backdrop-blur-md border border-purple-400/20"
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
          >
            <SiJavascript size={26} className="text-yellow-300" />
          </motion.div> */}
        </motion.div>
      </div>

      {/* Scroll Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-10 text-gray-400 text-sm flex flex-col items-center"
      >
        <span>Scroll</span>
        <span className="text-2xl">↓</span>
      </motion.div>
    </section>
  );
}
