import { PROJECTS } from "../data/projects";
import type { Project } from "../types/Project";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAME } from "../data/const";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";

export default function Projects() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [projects] = useState<Project[]>(PROJECTS);
  const [searchedProjects, setSearchedProjects] = useState<Project[]>(PROJECTS);

  useEffect(() => {
    const filteredProjects = projects.filter((project) => {
      const projectName = project.title.toLowerCase();
      const searchQueryLower = searchQuery.toLowerCase();
      return projectName.includes(searchQueryLower);
    });
    setSearchedProjects(filteredProjects);
  }, [searchQuery, projects]);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <a
        className="inline-block 
    border-primary-600
    text-secondary-300 rounded-lg font-medium hover:text-primary-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft className="inline-block mr-2" />
        {NAME}
      </a>
      <h4 className="text-xl block font-bold mb-10"> All Projects</h4>
      <form className="py-4 grid grid-cols-1 gap-6">
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Projects..."
          className="p-2 text-md text-secondary-300 border border-secondary-300 rounded-md focus:outline-none focus:border-primary-600"
        />
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...searchedProjects].reverse().map((project) => (
          <div
            key={project.id}
            className="rounded-md ransition border-2 border-transparent hover:border-secondary-300 cursor-pointer flex flex-col"
          >
            <img
              src={project.img}
              alt={project.title}
              className="object-fit rounded-sm"
            />
            <h5 className="text-lg px-2 font-semibold">{project.title}</h5>
            <p className="mt-2 px-2 text-sm leading-relaxed text-secondary-300">
              {project.description}
            </p>
            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2 ">
              {project.tags?.map((t) => (
                <span
                  key={t}
                  className="px-6 text-xs rounded-md border text-secondary-300 border-secondary-300 "
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
