import { PROJECTS } from "../../data/projects";
import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <>
      {[...PROJECTS]
        .reverse()
        .slice(0, 4)
        .map((p) => (
          <Link
            key={p.id}
            to={`/projects/${p.id}`}
            className="rounded-md transition border-2 border-transparent hover:border-secondary-300 cursor-pointer flex"
          >
            <div className="flex-1">
              <h5 className="px-3 py-3 text-lg font-semibold">{p.title}</h5>
              <p className="px-3 mt-2 text-sm leading-relaxed text-secondary-300">
                {p.description}
              </p>
              {/* Tags */}
              <div className="px-3 mt-4 flex flex-wrap gap-2 ">
                {p.tags?.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs rounded-md border text-secondary-300 border-secondary-300 "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <img
              src={p.img}
              alt={p.title}
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
