import { EDUCATION } from "../../data/const";

export default function Education() {
  return (
    <section id="education" className="md:ml-64 px-8 py-20 bg-navyLight">
      <div className="max-w-3xl mx-auto">
        <h4 className="text-accent font-mono mb-6">Education</h4>
        <div className="grid grid-cols-1 gap-6">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="bg-white  rounded-lg">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
