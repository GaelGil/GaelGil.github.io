import { PROJECTS } from "../data/projects";
import type { Project } from "../types/Project";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAME } from "../data/const";
import { FaArrowLeft } from "react-icons/fa";

export default function Projects() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [projects, setProjects] = useState<Project[]>(PROJECTS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent default beavhior of reloading
    if (!searchQuery.trim()) return; // if not full empty space
    if (loading) return; // if we are loading return
    setLoading(true);
    console.log(error);
    try {
      const filteredProjects = projects.filter((project) => {
        const projectName = project.title.toLowerCase();
        if (!searchQuery) return projects; // if search query is empty return all projects
        const searchQueryLower = searchQuery.toLowerCase();
        return projectName.includes(searchQueryLower);
      });
      setProjects(filteredProjects); // update the projects state with filtered results
      setError(""); // update error state with empty string
    } catch {
      setError("failed to load error"); // update the error state with error
    } finally {
      setLoading(false); // update the loading state to false
    }
  };

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
      <form onSubmit={handleSearch} className=" p-8 grid grid-cols-1 gap-6">
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Projects..."
          className="p-2 text-md text-secondary-300 border border-secondary-300 rounded-md focus:outline-none focus:border-primary-600"
        />
      </form>
      <div className="grid grid-cols-1 gap-6">
        {[...projects].reverse().map((p) => (
          <div
            key={p.id}
            className="rounded-md p-6 shadow-md transition hover:border border-primary-600 cursor-pointer flex"
          >
            <div className="flex-1">
              <h5 className="text-lg font-semibold">{p.title}</h5>
              <p className="mt-2 text-sm leading-relaxed text-secondary-300">
                {p.description}
              </p>
              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2 ">
                {p.tags?.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs rounded-md border border-primary-600 "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <img
              src={p.img}
              alt={p.title}
              className=" w-24 h-24 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
