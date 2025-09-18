import { SKILLS } from "../../data/skills";

export default function Skills() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-3">
        {SKILLS.map((skill: string, idx: number) => (
          <span
            key={idx}
            className="border-1 border-secondary-300 text-secondary-300 px-4 py-2 rounded-full"
          >
            <img
              className="w-6 h-6 mr-2 inline"
              src={`https://skillicons.dev/icons?i=${skill.toLowerCase()}&theme=dark`}
            />
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}
