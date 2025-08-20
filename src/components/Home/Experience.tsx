import { EXPERIENCE } from "../../data/const";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-4 sm:px-6 md:px-8 py-8 md:py-12 bg-navyLight"
    >
      <div className="max-w-3xl mx-auto md:mx-0 md:ml-8">
        <h4 className="text-xl block font-bold mb-10">Experience</h4>
        <div className="grid grid-cols-1 gap-6">
          {EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="rounded-lg">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <p className="text-secondary-300">{exp.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
