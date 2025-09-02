import { SKILLS } from "../../data/skills";
import { Image, Container, Badge } from "@mantine/core";
export default function Skills() {
  return (
    <Container p={"md"}>
      {SKILLS.map((skill: string, idx: number) => (
        <Badge key={idx} bd={4} bg={"main.3"} c={"main.0"}>
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
    </Container>
  );
}
