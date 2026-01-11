import { Badge, Flex, Image } from "@mantine/core";
import { SKILLS } from "../../data/skills";

export default function Skills() {
  return (
    <Flex>
      {SKILLS.map((skill: string, idx: number) => (
        <Badge
          key={idx}
          leftSection={
            <Image
              w={10}
              h={10}
              src={`https://skillicons.dev/icons?i=${skill.toLowerCase()}&theme=dark`}
            />
          }
        >
          {skill}
        </Badge>
      ))}
    </Flex>
  );
}
