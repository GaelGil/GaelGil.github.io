import { EDUCATION } from "../../data/education";

export default function Education() {
  return (
    <>
      {EDUCATION.map((edu, idx) => (
        <div key={idx} className="rounded-lg">
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-secondary-300">{edu.institution}</p>
        </div>
      ))}
    </>
  );
}
