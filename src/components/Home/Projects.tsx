import { PROJECTS } from "../../data/projects";
import { Link } from "@tanstack/react-router";
export default function Projects() {
  return (
    <>
      {[...PROJECTS]
        .reverse()
        .slice(0, 4)
        .map((project) => (
          <Link
            key={project.id}
            to="/projects/$id"
            params={{ id: project.id.toString() }}
            className="rounded-md transition border-2 border-transparent hover:border-secondary-300 cursor-pointer flex"
          >
            <div className="flex-1">
              <h5 className="px-3 py-3 text-lg font-semibold">
                {project.title}
              </h5>
              <p className="px-3 mt-2 text-sm leading-relaxed text-secondary-300">
                {project.description}
              </p>
              {/* Tags */}
              <div className="px-3 mt-4 flex flex-wrap gap-2 ">
                {project.tags?.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs rounded-md text-secondary-300 bg-tertiary-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <img
              src={project.img}
              alt={project.title}
              className="object-fit rounded-sm md:w-50 md:h-50 w-25 h-25 "
            />
          </Link>
        ))}

      {/* View All Button */}
      <div className="mt-12">
        <Link
          to="/projects"
          className="inline-block px-6 py-3 border
            border-secondary-300
            text-secondary-300 rounded-lg font-medium hover:text-primary-600 hover:border-primary-600 cursor-pointer"
        >
          View All Projects
        </Link>
      </div>
    </>
  );
}
