// import React from "react";

// export default function Contact() {
//   return (
//     <section id="contact" className="section bg-black/10">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact</h2>
//         <p className="text-gray-300 mb-6">I'm open to collaboration and job opportunities. Let's connect.</p>

//         <a href="mailto:goyaldushyant075@gmail.com" className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-400 px-6 py-3 rounded-lg text-white shadow-lg">
//           Email Me
//         </a>
//       </div>
//     </section>
//   );
// }


//  Method -2 

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";

// export default function Contact() {
//   const [loading, setLoading] = useState(false);
//   const [done, setDone] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm(
//         "service_alzd1aw",   // Replace with EmailJS service ID
//         "template_3ccpjmc",  // Replace with EmailJS template ID
//         e.target,
//         "q0yhsOQso-Ze9T1P9"   // Replace with EmailJS public key
//       )
//       .then(
//         () => {
//           setLoading(false);
//           setDone(true);
//           e.target.reset();
//         },
//         () => setLoading(false)
//       );
//   };

//   return (
//     <section id="contact" className="py-24 px-6 bg-[#0B0F17] text-white relative overflow-hidden">
//       {/* Floating animated background elements */}
//       <div className="floating-orb orb1"></div>
//       <div className="floating-orb orb2"></div>
//       <div className="contact-grid-bg"></div>

//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center text-4xl md:text-5xl font-extrabold mb-5"
//         >
//           Get In <span className="text-purple-400">Touch</span>
//         </motion.h2>

//         <p className="text-center text-gray-300 mb-14 text-lg">
//           I'm open to opportunities, collaborations, or just a friendly chat.
//         </p>

//         <div className="grid md:grid-cols-2 gap-12">

//           {/* LEFT: Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -25 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="magic-contact-card p-8 rounded-2xl"
//           >
//             <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>

//             <div className="space-y-6">
//               <div className="flex items-center gap-4">
//                 <FiPhone size={26} className="text-purple-400" />
//                 <p className="text-gray-300 text-lg">8273224365</p>
//               </div>

//               <div className="flex items-center gap-4">
//                 <FiMail size={26} className="text-purple-400" />
//                 <p className="text-gray-300 text-lg">goyaldushyant075@gmail.com</p>
//               </div>
//             </div>

//             {/* Social Icons */}
//             <h4 className="mt-10 mb-4 text-xl font-semibold">Find me on</h4>
//             <div className="flex gap-5">
//               <a
//                 href="https://github.com/Dushyant9639"
//                 target="_blank"
//                 className="social-btn"
//               >
//                 <FiGithub size={24} />
//               </a>

//               <a
//                 href="https://linkedin.com/in/dushyant-goyal-b889121b3/"
//                 target="_blank"
//                 className="social-btn"
//               >
//                 <FiLinkedin size={24} />
//               </a>
//             </div>
//           </motion.div>

//           {/* RIGHT: Contact Form */}
//           <motion.form
//             onSubmit={sendEmail}
//             initial={{ opacity: 0, x: 25 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="magic-contact-card p-8 rounded-2xl"
//           >
//             <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>

//             <input
//               type="text"
//               name="user_name"
//               placeholder="Your Name"
//               required
//               className="contact-input"
//             />

//             <input
//               type="email"
//               name="user_email"
//               placeholder="Your Email"
//               required
//               className="contact-input"
//             />

//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               required
//               className="contact-input resize-none"
//             ></textarea>

//             <button
//               type="submit"
//               className="contact-btn"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>

//             {done && (
//               <p className="text-green-400 mt-4 text-center">
//                 Message sent successfully ✔
//               </p>
//             )}
//           </motion.form>
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section py-20 relative">
      
      {/* Glowing Background Orb */}
      <div className="absolute inset-0 -z-10">
        <div className="w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-[120px] absolute top-10 left-10"></div>
        <div className="w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[100px] absolute bottom-10 right-10"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white tracking-wide mb-6"
        >
          Let’s Get in Touch
        </motion.h2>

        <motion.p
          className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I’d love to collaborate, discuss opportunities, or answer questions.  
          Feel free to reach out through the form or directly via the details below.
        </motion.p>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 shadow-lg shadow-purple-900/30"
        >

          <div className="grid md:grid-cols-2 gap-10">
            
            {/* Contact Details */}
            <div className="space-y-6 text-left">
              
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">Phone</p>
                <div className="flex items-center gap-3 mt-1">
                  <FaPhoneAlt className="text-purple-400 text-lg" />
                  <p className="text-gray-200 text-lg font-medium">8273224365</p>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">Email</p>
                <div className="flex items-center gap-3 mt-1">
                  <FaEnvelope className="text-purple-400 text-lg" />
                  <p className="text-gray-200 text-lg font-medium">
                    goyaldushyant075@gmail.com
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">Social</p>
                <div className="flex flex-col gap-4 mt-2">
                  
                  <a
                    href="https://github.com/Dushyant9639"
                    target="_blank"
                    className="flex items-center gap-3 hover:text-purple-400 transition"
                  >
                    <FaGithub className="text-purple-400" />
                    <span className="text-gray-200 text-lg">GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/dushyant-goyal-b889121b3/"
                    target="_blank"
                    className="flex items-center gap-3 hover:text-purple-400 transition"
                  >
                    <FaLinkedin className="text-purple-400" />
                    <span className="text-gray-200 text-lg">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <motion.form
              method="POST"
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                className="w-full bg-black/30 border border-purple-600/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                name="user_email"
                className="w-full bg-black/30 border border-purple-600/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              />

              <textarea
                name="message"
                placeholder="Your Message..."
                rows="4"
                className="w-full bg-black/30 border border-purple-600/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-purple-600 hover:bg-purple-700 transition text-white font-semibold py-3 rounded-lg shadow-lg shadow-purple-900/40"
              >
                Send Message ✨
              </motion.button>
            </motion.form>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

