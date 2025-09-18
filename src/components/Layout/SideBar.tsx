import { LINKEDIN_URL, GITHUB_URL } from "../../data/const";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { NAME, POSITION } from "../../data/const";
import Photo from "../Home/Photo";
export default function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:mt-16 lg:mb-16 md:w-2/5 h-auto md:h-screen flex justify-center">
      <div className="max-w-sm">
        <Photo />
        <br />
        <h1 className="text-4xl font-bold sm:text-5xl ">{NAME}</h1>
        <p className="text-secondary-300 hidden">{POSITION}</p>
        <nav className="mt-8 space-y-2 text-secondary-300 lg:block md:bl sm:flex">
          <a
            href="#about"
            className="block font-bold uppercase hover:text-primary-600 cursor-pointer"
          >
            About
          </a>
          <a
            href="#other"
            className="block font-bold uppercase hover:text-primary-600 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="block font-bold uppercase hover:text-primary-600 cursor-pointer"
          >
            Experience
          </a>
        </nav>
        <div className="mt-8 flex space-x-4 text-secondary-300">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex hover:text-primary-600"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex hover:text-primary-600"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </aside>
  );
}
