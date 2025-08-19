import { LINKEDIN_URL, GITHUB_URL } from "../../data/const";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { NAME } from "../../data/const";
import Photo from "../Home/PhotoSection";
export default function Sidebar() {
  return (
    <aside className="w-full md:w-2/5 h-auto md:h-screen flex items-center justify-center p-8 text-white bg-navyLight">
      {" "}
      <div className="max-w-sm">
        <Photo />
        <br />
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl ">
          {NAME}
        </h1>
        <p className="mt-2 text-slate ">...</p>
        <nav className="mt-8 space-y-2">
          <a
            href="#about"
            className="block font-bold uppercase hover:text-red-500 cursor-pointer"
          >
            About
          </a>
          <a
            href="#projects"
            className="block font-bold uppercase hover:text-red-500 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="block font-bold uppercase hover:text-red-500 cursor-pointer"
          >
            Experience
          </a>
        </nav>
        <div className="mt-8 space-y-2">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white  hover:underline"
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
