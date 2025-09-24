import { PROJECTS } from "../data/projects";
import type { Project } from "../types/Project";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { NAME } from "../data/const";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";
import Footer from "../components/Layout/Footer";

export default function Projects() {
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
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="max-w-4xl mx-auto p-8">
        <Link
          to={"/"}
          className="inline-block  border-primary-600 text-secondary-300 rounded-lg font-medium hover:text-primary-600 cursor-pointer"
        >
          <FaArrowLeft className="inline-block mr-2" />
          {NAME}
        </Link>
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
            <Link
              to="/projects/$id"
              params={{ id: project.id.toString() }}
              key={project.id}
              className="rounded-xl hover:bg-tertiary-300 cursor-pointer flex flex-col"
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
                    className="px-2 py-1 text-xs rounded-md text-secondary-300 bg-tertiary-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
