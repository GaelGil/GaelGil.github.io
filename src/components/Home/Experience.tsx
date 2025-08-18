import { EXPERIENCE } from "../../data/const";

export default function Experience() {
  return (
    <section id="experience" className="md:ml-64 px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <h4 className="text-accent font-mono mb-6">Experience</h4>
        <div className="grid grid-cols-1 gap-6">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="bg-white  rounded-lg">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-gray-700">{exp.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
