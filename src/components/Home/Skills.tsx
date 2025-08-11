import { SKILLS } from "../../data/const";

export default function Skills() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {SKILLS.map((skill: string, idx: number) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
