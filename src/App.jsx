import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Glow background blobs */}
      <div className="glow-wrap" aria-hidden="true">
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
      </div>

      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
