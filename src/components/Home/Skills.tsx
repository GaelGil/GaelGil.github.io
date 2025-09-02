import { SKILLS } from "../../data/skills";
import { Image, Container, Badge } from "@mantine/core";
export default function Skills() {
  return (
    <>
      {SKILLS.map((skill: string, idx: number) => (
        <Badge
          key={idx}
          bd={"1px solid main.0"}
          bg={"main.7"}
          c={"main.0"}
          variant="outline"
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
