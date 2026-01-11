import { Text, Title } from "@mantine/core";
import { EDUCATION } from "../../data/education";

export default function Education() {
  return (
    <>
      {EDUCATION.map((edu, idx) => (
        <div key={idx} className="rounded-lg">
          <Title order={3} c="red.9">
            {edu.degree}
          </Title>
          <Text>{edu.institution}</Text>
          {edu.startDate && <Text c="dimmed">{edu.startDate}</Text>}
        </div>
      ))}
    </>
  );
}
