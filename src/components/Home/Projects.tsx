import { projects } from "../../data/const";
export default function Projects() {
  return (
    <section
      id="projects"
      className="px-4 sm:px-6 md:px-8 py-12 md:py-20 bg-navyLight"
    >
      <div className="max-w-5xl mx-auto md:mx-0 md:ml-8">
        {/* Section Heading */}
        <h4 className="text-accent font-mono mb-10 text-lg tracking-wide">
          Projects
        </h4>

        {/* Projects Grid */}
        <div className="flex flex-col gap-8">
          {[...projects]
            .reverse()
            .slice(0, 4)
            .map((p) => (
              <div
                key={p.id}
                className="group rounded-xl border border-slate-700 bg-navy p-6 shadow-md transition hover:shadow-lg hover:border-accent cursor-pointer"
              >
                <h5 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                  {p.title}
                </h5>
                <p className="text-slate mt-2 text-sm leading-relaxed">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags?.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs rounded-md border border-slate-600 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* View All Button */}
        <div className="mt-12">
          <div
            px-2
            py-1
            text-xs
            rounded-md
            className="inline-block px-6 py-3 border border-accent             border
            border-slate-600
            text-slate-300 rounded-lg font-medium "
            onClick={() => (window.location.href = "/#projects")}
          >
            View All Projects
          </div>
        </div>
      </div>
    </section>
  );
}
