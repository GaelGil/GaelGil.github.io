import { EDUCATION } from "../../data/const";

export default function Education() {
  return (
    <section id="education" className="md:ml-64 px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <h4 className="text-accent font-mono mb-2">Education</h4>
        <ul className="space-y-4">
          {EDUCATION.map((edu, idx) => (
            <li key={idx} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-700">{edu.institution}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
