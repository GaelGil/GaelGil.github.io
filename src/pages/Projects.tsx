import { projects } from "../data/const";

export default function Projects() {
  return (
    <section id="projects" className="md:ml-64 px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h4 className="text-accent font-mono mb-6">Projects</h4>
        <div className="grid grid-cols-1 gap-6">
          {[...projects].reverse().map((p) => (
            <a
              key={p.id}
              href={p.url}
              className="block p-6 border rounded-lg border-slate hover:border-accent transition"
            >
              <h5 className="text-lg font-semibold text-white">{p.title}</h5>
              <p className="text-slate text-white mt-2">{p.description}</p>
              <div className="mt-3 text-xs text-slate flex gap-2">
                {p.tags?.map((t) => (
                  <span
                    key={t}
                    className="px-2  text-white py-1 border rounded border-slate"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
