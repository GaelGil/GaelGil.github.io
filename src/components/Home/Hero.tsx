import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="md:ml-64 min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto px-8 py-24">
        <p className="text-accent font-mono mb-4">Hi, my name is</p>
        <h2 className="text-5xl font-bold text-white">Brittany Chiang.</h2>
        <h3 className="mt-2 text-2xl text-slate">
          I build accessible, pixel-perfect digital experiences for the web.
        </h3>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-5 py-3 border rounded border-accent hover:bg-accent/10"
          >
            View projects
          </a>
          <a
            href="#about"
            className="px-5 py-3 border rounded border-slate hover:border-accent"
          >
            About
          </a>
        </div>
      </div>
    </section>
  );
}
