import { EXPERIENCE } from "../../data/experience";

export default function Experience() {
  return (
    <>
      {EXPERIENCE.map((exp, idx) => (
        <div key={idx} className="rounded-lg">
          <h3 className="text-xl font-semibold">{exp.company}</h3>
          <p className="text-secondary-300">{exp.position}</p>
        </div>
      ))}
    </>
  );
}
