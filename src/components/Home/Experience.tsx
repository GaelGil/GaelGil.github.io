import { EXPERIENCE } from "../../data/experience";
import { Title, Text } from "@mantine/core";

export default function Experience() {
  return (
    <>
      {EXPERIENCE.map((exp, idx) => (
        <div key={idx} className="rounded-lg">
          <Title c={"var(--mantine-color-text-primary)"} order={3} fw={600}>
            {exp.company}
          </Title>
          <Text c={"var(--mantine-color-text-primary)"} fw={600}>
            {exp.position}
          </Text>
        </div>
      ))}
    </>
  );
}
