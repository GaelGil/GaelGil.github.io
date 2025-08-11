import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LINKEDIN_URL, GITHUB_URL } from "../data/ursl";

export default function About() {
  return (
    <div className="bg-white  shadow-lg rounded-xl p-8 transition">
      {/* Name */}
      <h1 className="text-4xl font-extrabold mb-2 ">Your Name</h1>

      {/* Current Position */}
      <h2 className="text-lg font-medium text-gray-600  mb-6">
        Professional Engineer | Structural Design Specialist
      </h2>

      {/* About Me Text */}
      <p className="text-lg text-gray-700  leading-relaxed mb-6">
        I am a professional engineer with a passion for designing innovative
        solutions to complex problems. My work blends creativity and precision,
        leveraging modern tools and methodologies to deliver results that are
        both effective and sustainable.
      </p>

      {/* Social Links */}
      <div className="flex space-x-6">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-700  hover:underline"
        >
          <FaLinkedin size={24} />
          <span className="text-sm font-medium">LinkedIn</span>
        </a>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-800  hover:underline"
        >
          <FaGithub size={24} />
          <span className="text-sm font-medium">GitHub</span>
        </a>
      </div>
    </div>
  );
}
