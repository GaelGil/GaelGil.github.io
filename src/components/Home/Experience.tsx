import { EXPERIENCE } from "../../data/experience";
import { Title, Text } from "@mantine/core";

export default function Experience() {
  return (
    <>
      {EXPERIENCE.map((exp, idx) => (
        <div key={idx} className="rounded-lg">
          <Title
            c={"main.0"}
            order={3}
            fw={600}
            className="text-xl font-semibold"
          >
            {exp.company}
          </Title>
          <Text c={"main.0"} fw={600}>
            {exp.position}
          </Text>
        </div>
      ))}
    </>
  );
}
