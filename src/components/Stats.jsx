// import React from "react";

// export default function Stats() {
//   return (
//     <section className="section">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-8">GitHub Stats</h2>

//         <div className="grid md:grid-cols-2 gap-8 items-start">
//           <img src="https://github-readme-stats.vercel.app/api?username=Dushyant9639&show_icons=true&theme=tokyonight&hide_border=true" alt="github-stats" />
//           <div>
//             <img className="mb-6" src="https://streak-stats.demolab.com?user=Dushyant9639&theme=tokyonight_duo&hide_border=true" alt="streak" />
//             <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Dushyant9639&layout=compact&theme=tokyonight&hide_border=true" alt="top langs" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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

      {/* Top Languages */}
      {/* <div className="max-w-6xl mx-auto mt-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent pointer-events-none"></div>

          <h3 className="text-2xl text-white font-semibold mb-5">
            🧠 Languages I Use The Most
          </h3>

          <img
            className="rounded-xl shadow-md mx-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Dushyant9639&layout=compact&theme=radical&hide_border=true&border_radius=12"
            alt="Top Languages"
          />
        </motion.div>
      </div> */}

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

// Method -3 

// import React from "react";
// import { motion } from "framer-motion";

// const Github = () => {
//   const username = "Dushyant9639";

//   return (
//     <section
//       id="github"
//       className="py-20 px-6 bg-[#0B0F17] text-white relative overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto">

//         {/* Title */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center text-4xl md:text-5xl font-extrabold mb-2"
//         >
//           GitHub <span className="text-purple-500">Analytics</span>
//         </motion.h2>

//         <p className="text-center text-gray-400 mb-12">
//           Stats • Streak • Top Languages • Contribution History
//         </p>

//         {/* Stats + Streak */}
//         <div className="grid md:grid-cols-2 gap-10 mb-14">

//           {/* GitHub Stats */}
//           <motion.div
//             initial={{ opacity: 0, x: -25 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             whileHover={{ scale: 1.02 }}
//             className="github-card"
//           >
//             <h3 className="text-xl font-semibold mb-3">GitHub Stats</h3>

//             <motion.img
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               src={`https://github-readme-stats-sigma-five.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true`}
//               alt="GitHub Stats"
//               className="rounded-lg w-full shadow-lg"
//             />
//           </motion.div>

//           {/* FIXED GitHub Streak */}
//           <motion.div
//             initial={{ opacity: 0, x: 25 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             whileHover={{ scale: 1.02 }}
//             className="github-card"
//           >
//             <h3 className="text-xl font-semibold mb-3">GitHub Streak</h3>

//             <motion.img
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               src={`https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true`}
//               alt="GitHub Streak"
//               className="rounded-lg w-full shadow-lg"
//               onError={(e) => {
//                 // Fallback mirror
//                 e.target.src = `https://streak-stats.demolab.com?user=${username}&theme=tokyonight&hide_border=true`;
//               }}
//             />
//           </motion.div>
//         </div>

//         {/* Top Languages */}
//        {/* Top Languages */}
// <motion.div
//   initial={{ opacity: 0, y: 25 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.5 }}
//   whileHover={{ scale: 1.015 }}
//   className="github-card p-6 rounded-2xl mb-14 max-w-xl mx-auto"
// >
//   <h3 className="text-xl font-semibold mb-3 text-center">
//     Most Used Languages
//   </h3>

//   <div className="p-3 rounded-xl bg-black/20 border border-purple-500/20 shadow-inner hover:shadow-purple-500/10 transition-all">
//     <motion.img
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       src={`https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`}
//       alt="Top Languages"
//       className="rounded-lg w-full"
//     />
//   </div>
// </motion.div>


//  {/* Contribution Calendar */}
// <motion.div
//   initial={{ opacity: 0, y: 25 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6 }}
//   className="relative modern-calendar p-8 rounded-2xl"
// >
//   <h3 className="text-xl font-semibold mb-6 text-center">
//     Contribution Calendar
//   </h3>

//   {/* Background glow grid */}
//   <div className="absolute inset-0 rounded-2xl pointer-events-none bg-grid"></div>

//   {/* Floating gradient orbs */}
//   <div className="floating-orb orb1"></div>
//   <div className="floating-orb orb2"></div>

//   {/* Calendar wrapper */}
//   <motion.div
//     whileHover={{ scale: 1.02 }}
//     transition={{ type: "spring", stiffness: 130 }}
//     className="p-4 rounded-xl bg-black/25 border border-purple-500/20 shadow-inner relative overflow-hidden"
//   >
//     {/* Shimmer overlay */}
//     <div className="shimmer"></div>

//     {/* Calendar image */}
//     <motion.img
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.9 }}
//       src={`https://ghchart.rshah.org/8b5cf6/${username}`}
//       alt="GitHub Calendar"
//       className="rounded-md w-full max-w-3xl mx-auto calendar-heatpulse"
//     />
//   </motion.div>
// </motion.div>


//       </div>
//     </section>
//   );
// };

// export default Github;
