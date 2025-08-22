import { PROJECTS } from "../../data/projects";
import { useNavigate } from "react-router-dom";
export default function Projects() {
  const navigate = useNavigate();
  return (
    <section
      id="projects"
      className="px-4 sm:px-6 md:px-8 py-8 md:py-12 bg-navyLight"
    >
      <div className="max-w-3xl mx-auto md:mx-0 md:ml-8">
        {/* Section Heading */}
        <h4 className="text-xl block font-bold mb-10">Projects</h4>

        {/* Projects Grid */}
        <div className="flex flex-col gap-8">
          {[...PROJECTS]
            .reverse()
            .slice(0, 4)
            .map((p) => (
              <div
                key={p.id}
                className="rounded-md p-6 shadow-md transition border border-primary-600 hover:border-secondary-300 cursor-pointer flex"
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
                        className="px-2 py-1 text-xs rounded-md border text-secondary-300 border-primary-600 "
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <img
                  src={p.img}
                  alt={p.title}
                  className=" w-24 h-24 object-fit"
                />
              </div>
            ))}
        </div>

        {/* View All Button */}
        <div className="mt-12">
          <button
            className="inline-block px-6 py-3 border border-accent
            border-primary-600
            text-secondary-300 rounded-lg font-medium hover:text-primary-600 cursor-pointer"
            onClick={() => navigate("/projects")}
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
