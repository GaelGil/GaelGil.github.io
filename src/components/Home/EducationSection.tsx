import { EDUCATION } from "../../data/const";

export default function Education() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Education</h2>
      <ul className="space-y-4">
        {EDUCATION.map((edu, idx) => (
          <li key={idx} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-700">{edu.institution}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
