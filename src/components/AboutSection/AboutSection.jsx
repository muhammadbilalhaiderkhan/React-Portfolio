import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-[#0b0b0b] text-white py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/[0.015] rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
          <span className="text-sm font-medium text-gray-300 tracking-wide">ABOUT</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent leading-tight">
          About Me
        </h2>

        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 font-light tracking-wide">
          I'm <span className="text-white font-medium">Bilal Haider</span>, a web developer and UI/UX designer specializing in building
          modern, responsive, and visually appealing websites. I focus on clean design,
          optimized performance, and seamless user experience — helping businesses bring
          their digital vision to life.
        </p>

        <button
          onClick={() => navigate("/about")}
          className="group relative bg-white text-black font-semibold px-8 py-3.5 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="relative z-10">Read More</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </section>
  );
}
