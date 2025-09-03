import { SKILLS } from "../../data/skills";
import { Image, Badge } from "@mantine/core";
export default function Skills() {
  return (
    <>
      {SKILLS.map((skill: string, idx: number) => (
        <Badge
          key={idx}
          p={"md"}
          fw={500}
          fz={"xs"}
          variant="light"
          color={"var(--mantine-color-text-primary)"}
        >
          <Image
            w={20}
            h={20}
            mr={2}
            display={"inline"}
            src={`https://skillicons.dev/icons?i=${skill.toLowerCase()}&theme=dark`}
          />
          {skill}
        </Badge>
      ))}
    </>
  );
}
