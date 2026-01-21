import { Box, Text, Title } from "@mantine/core";
import { EDUCATION } from "../../data/education";

export default function Education() {
  return (
    <>
      {EDUCATION.map((edu, idx) => (
        <Box key={idx}>
          <Title order={3} c="red">
            {edu.degree}
          </Title>
          <Text>{edu.institution}</Text>
          {edu.startDate && <Text>{edu.startDate}</Text>}
        </Box>
      ))}
    </>
  );
}
