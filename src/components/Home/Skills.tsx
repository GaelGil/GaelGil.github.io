import { SKILLS } from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 md:px-8 py-8 md:py-12 bg-navyLight"
    >
      <div className="max-w-3xl mx-auto md:mx-0 md:ml-8">
        <h4 className="text-xl block font-bold mb-10">Skills</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {SKILLS.map((skill: string, idx: number) => (
            <span
              key={idx}
              className="border border-accent
            border-primary-600
            text-secondary-300 px-4 py-2 rounded-full text-sm font-medium"
            >
              <img
                className="w-6 h-6 mr-2 inline"
                src={`https://skillicons.dev/icons?i=${skill.toLowerCase()}&theme=dark`}
              />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
