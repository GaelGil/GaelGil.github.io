import { useParams, Link } from "@tanstack/react-router";
import { PROJECTS } from "../data/projects";
import { FaArrowLeft } from "react-icons/fa";
export default function Project() {
  const { id } = useParams({ strict: false });
  // const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === Number(id));

  return (
    <div className="max-w-2xl mx-auto p-8 px-2">
      <Link
        to="/projects"
        className="inline-block border-primary-600 text-secondary-300 rounded-lg font-medium hover:text-primary-600 cursor-pointer"
      >
        <FaArrowLeft className="inline-block mr-2" />
        Projects
      </Link>
      {!project ? (
        <div>Project not found</div>
      ) : (
        <>
          <h5 className="text-xl font-bold">{project.title}</h5>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <div className="flex items-center">
              <img
                src={project.img}
                alt={project.title}
                className="mt-4 h-100 w-100 rounded-sm align-middle"
              />
            </div>
          </div>
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

          {project.link ? (
            <a
              className="text-xl leading-relaxed text-secondary-300"
              href={project.link}
            >
              Project
            </a>
          ) : (
            <>
              <h1></h1>
            </>
          )}
          <br />
          <a
            className="text-xl leading-relaxed text-secondary-300"
            href={project.repo}
          >
            Repo
          </a>
          <p className="text-xl leading-relaxed">{project.content}</p>
        </>
      )}
    </div>
  );
}
