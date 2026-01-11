import { EXPERIENCE } from "../../data/experience";
import { Title, Text, Flex } from "@mantine/core";
export default function Experience() {
  return (
    <>
      {EXPERIENCE.map((exp, idx) => (
        <div key={idx} className="rounded-lg">
          <Title order={3}>{exp.company}</Title>
          <Text>{exp.position}</Text>
          <Flex>
            <Text>{exp.startDate}</Text> - <Text>{exp.endDate}</Text>
          </Flex>
        </div>
      ))}
    </>
  );
}
