import { useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Project() {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === Number(id));

  return (
    <div className="max-w-2xl mx-auto p-8 px-2">
      <a
        className="inline-block 
          border-primary-600
          text-secondary-300 rounded-lg font-medium hover:text-primary-600 cursor-pointer"
        onClick={() => navigate("/projects")}
      >
        <FaArrowLeft className="inline-block mr-2" />
        Projects
      </a>
      {!project ? (
        <div>Project not found</div>
      ) : (
        <>
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-auto rounded-sm"
          />
          <h5 className="text-xl font-bold">{project.title}</h5>
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
          <p className="text-xl leading-relaxed text-secondary-300">
            {project.description}
          </p>
          <p className="text-xl leading-relaxed text-secondary-300">
            {project.content}
          </p>
          {/* Tags */}
        </>
      )}
    </div>
  );
}
