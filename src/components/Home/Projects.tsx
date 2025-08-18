import { projects } from "../../data/const";

export default function Projects() {
  return (
    <section id="about" className="md:ml-64 px-8 py-20 bg-navyLight">
      <div className="max-w-3xl mx-auto">
        <h4 className="text-accent font-mono mb-6">Projects</h4>
        <div className="grid grid-cols-1 gap-6">
          {[...projects]
            .reverse()
            .slice(0, 4)
            .map((p) => (
              <a
                key={p.id}
                href={p.url}
                className="block p-6 rounded-lg border-slate"
              >
                <h5 className="text-lg font-semibold text-black">{p.title}</h5>
                <p className="text-slate mt-2">{p.description}</p>
                <div className="mt-3 text-xs text-slate flex gap-2">
                  {p.tags?.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 border rounded border-slate"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
        </div>
        <div className="mt-8 flex gap-4">
          <a
            href="/projects"
            className="px-5 py-3 border rounded border-accent hover:bg-accent/10"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
