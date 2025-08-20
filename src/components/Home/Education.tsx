import { EDUCATION } from "../../data/const";

export default function Education() {
  return (
    <section id="education" className="px-4 sm:px-6 md:px-8 bg-navyLight">
      <div className="max-w-3xl mx-auto md:mx-0 md:ml-8">
        <h4 className="text-xl block font-bold mb-10">Education</h4>
        <div className="grid grid-cols-1 gap-6">
          {EDUCATION.map((edu, idx) => (
            <div key={idx} className="rounded-lg">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-secondary-300">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
