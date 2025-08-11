import { LINKEDIN_URL, GITHUB_URL } from "../../data/const";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { NAME } from "../../data/const";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 w-1/2 h-screen flex items-center justify-center p-8">
      <div className="max-w-sm">
        <h1 className="text-3xl font-bold text-black">{NAME}</h1>
        <p className="mt-2 text-slate">...</p>
        <p className="text-lg text-gray-700  leading-relaxed mb-6">
          Thank you for coming to my website. Here you can learn about me, my
          projects, experince and what I do. My projects mainly revolved around
          engineering and data science.
        </p>

        <nav className="mt-8 space-y-2">
          <a href="#about" className="block hover:text-accent">
            About
          </a>
          <a href="#experience" className="block hover:text-accent">
            Experience
          </a>
          <a href="#projects" className="block hover:text-accent">
            Projects
          </a>
        </nav>

        <div className="mt-8 space-y-2">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-800  hover:underline"
          >
            <FaGithub size={24} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex space-x-2 text-blue-700  hover:underline text-sm block hover:text-accent transition"
          >
            <FaLinkedin size={24} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>{" "}
        </div>
      </div>
    </aside>
  );
}
