import { EDUCATION } from "../../data/education";
import { Title, Text } from "@mantine/core";
export default function Education() {
  return (
    <>
      {EDUCATION.map((edu, idx) => (
        <div key={idx} className="rounded-lg">
          <Title c={"main.0"} order={3} fw={600}>
            {edu.degree}
          </Title>
          <Text c={"main.0"} fw={600}>
            {edu.institution}
          </Text>
        </div>
      ))}
    </>
  );
}
