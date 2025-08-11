import { FaLinkedin, FaGithub } from "react-icons/fa";
import { LINKEDIN_URL, GITHUB_URL, NAME } from "../../data/const";

export default function About() {
  return (
    <div className="bg-white  shadow-lg rounded-xl p-8 transition">
      {/* Name */}
      <h1 className="text-4xl font-extrabold mb-2 ">{NAME}</h1>

      {/* Current Position */}
      <h2 className="text-lg font-medium text-gray-600  mb-6">...</h2>

      {/* About Me Text */}
      <p className="text-lg text-gray-700  leading-relaxed mb-6">
        Thank you for coming to my website. Here you can learn about me, my
        projects, experince and what I do. My projects mainly revolved around
        engineering and data science.
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
