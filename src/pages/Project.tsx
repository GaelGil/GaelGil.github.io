import { useParams } from "react-router-dom";
import { PROJECTS } from "../data/projects";
export default function Project() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === Number(id));

  return (
    <div className="max-w-4xl mx-auto p-8 px-2">
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
