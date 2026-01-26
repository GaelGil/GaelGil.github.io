import { EXPERIENCE } from "../../data/experience";
import { Title, Text, Flex, Box } from "@mantine/core";
export default function Experience() {
  return (
    <>
      {EXPERIENCE.map((exp, idx) => (
        <Box key={idx}>
          <Title order={3} c="red">
            {exp.company}
          </Title>
          <Text>{exp.position}</Text>
          <Flex c="dimmed">
            <Text>{exp.startDate}</Text> - <Text>{exp.endDate}</Text>
          </Flex>
        </Box>
      ))}
    </>
  );
}
