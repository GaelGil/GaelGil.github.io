import { SKILLS } from "../../data/const";

export default function Skills() {
  return (
    <section id="about" className="md:ml-64 px-8 py-20 bg-navyLight">
      <div className="max-w-3xl mx-auto">
        <h4 className="text-accent font-mono mb-2">Skills</h4>
        <div className="flex flex-wrap justify-center gap-3">
          {SKILLS.map((skill: string, idx: number) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              <img
                className="w-6 h-6 mr-2 inline"
                src={`https://skillicons.dev/icons?i=${skill.toLowerCase()}&theme=light`}
              />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
