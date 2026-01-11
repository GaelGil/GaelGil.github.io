import { Badge, Flex, Image } from "@mantine/core";
import { SKILLS } from "../../data/skills";

export default function Skills() {
  return (
    <Flex gap={4} wrap="wrap" justify="center">
      {SKILLS.map((skill: string, idx: number) => (
        <Badge
          key={idx}
          leftSection={
            <Image
              w={25}
              h={25}
              src={`https://skillicons.dev/icons?i=${skill.toLowerCase()}&theme=dark`}
            />
          }
          variant="light"
          color="rgba(255, 0, 0, 1)"
          size="lg"
        >
          {skill}
        </Badge>
      ))}
    </Flex>
  );
}
