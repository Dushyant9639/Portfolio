
// Method -2 
import React from "react";
import { motion } from "framer-motion";

export default function GithubStats() {
  return (
    <section id="github" className="relative py-28">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-purple-900/10"></div>

      {/* header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-5xl font-extrabold text-white"
      >
        GitHub{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Performance
        </span>
      </motion.h2>

      <p className="text-center text-gray-300 mt-4 text-lg">
        My open-source journey, contribution history, consistency & languages.
      </p>

      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">
        {/* GitHub Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none"></div>

          <h3 className="text-2xl text-white font-semibold mb-4">
            📊 GitHub Statistics
          </h3>

          <img
            className="rounded-xl shadow-lg"
            src= "https://github-readme-stats-sigma-five.vercel.app/api?username=Dushyant9639&show_icons=true&theme=tokyonight&hide_border=true"
            alt="GitHub Stats"
          />
        </motion.div>

        {/* Streak Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent pointer-events-none"></div>

          <h3 className="text-2xl text-white font-semibold mb-4">
            🔥 Contribution Streak
          </h3>

          <img
            className="rounded-xl shadow-lg"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Dushyant9639&theme=radical&hide_border=true&border_radius=12"
            alt="GitHub Streak"
          />
        </motion.div>
      </div>

      {/* Contribution Graph */}
      <div className="max-w-6xl mx-auto mt-14 px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none"></div>

          <h3 className="text-2xl text-white font-semibold mb-5">
            📅 Contribution Graph
          </h3>

          <img
            className="rounded-xl shadow-md"
            src="https://github-readme-activity-graph.vercel.app/graph?username=Dushyant9639&theme=react-dark&hide_border=true&area=true"
            alt="Contribution Graph"
          />
        </motion.div>
      </div>

      {/* GitHub Calendar */}
      <div className="max-w-6xl mx-auto mt-14 px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none"></div>

          <h3 className="text-2xl text-white font-semibold mb-5">
            🗓️ GitHub Contribution Calendar
          </h3>

          <img
            className="rounded-xl shadow-md w-full"
            src={`https://ghchart.rshah.org/7c3aed/Dushyant9639`}
            alt="GitHub Calendar"
          />
        </motion.div>
      </div>

      {/* Stats Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-gray-400 mt-12"
      >
        Consistency • Quality • Growth 🚀
      </motion.p>
    </section>
  );
}

