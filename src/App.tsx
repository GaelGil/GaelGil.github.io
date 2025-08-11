import React from "react";
import About from "./components/About";
import Photo from "./components/Photo";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Engineering Portfolio</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600">
                Projects
              </a>
            </li>
            <li>
              <a href="#education" className="hover:text-blue-600">
                Education
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-600">
                Skills
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-10 space-y-20">
        <section id="about">
          <About />
        </section>
        <section>
          <Photo />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-6 text-center">
        © {new Date().getFullYear()} Your Name — All Rights Reserved
      </footer>
    </div>
  );
}
