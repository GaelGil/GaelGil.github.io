import { SKILLS } from "../../data/skills";
import { Image } from "@mantine/core";
export default function Skills() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-3">
        {SKILLS.map((skill: string, idx: number) => (
          <span
            key={idx}
            className="border border-accent
            border-secondary-300
            text-secondary-300 px-4 py-2 rounded-full text-sm font-medium"
          >
            <Image
              w={20}
              h={20}
              mr={2}
              display={"inline"}
              src={`https://skillicons.dev/icons?i=${skill.toLowerCase()}&theme=dark`}
            />
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}
