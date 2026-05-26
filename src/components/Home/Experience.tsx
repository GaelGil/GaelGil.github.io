import { EXPERIENCE } from "../../data/experience";
import { Paper, Stack, Text, Title } from "@mantine/core";

export default function Experience() {
  return (
    <Stack gap="md" maw={720}>
      {EXPERIENCE.map((exp, idx) => (
        <Paper
          component="article"
          key={idx}
          withBorder
          radius="sm"
          p="md"
          bg="transparent"
        >
          <Title order={3} c="brand" size="h4" lh={1.25}>
            {exp.company}
          </Title>
          <Text c="dimmed">{exp.position}</Text>
          <Text size="sm" c="dimmed">
            {exp.startDate} - {exp.endDate}
          </Text>
        </Paper>
      ))}
    </Stack>
  );
}
