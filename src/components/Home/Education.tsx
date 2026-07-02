import { Paper, Stack, Text, Title } from "@mantine/core";
import { EDUCATION } from "../../data/education";

export default function Education() {
  return (
    <Stack gap="md" maw={720}>
      {EDUCATION.map((edu, idx) => (
        <Paper
          component="article"
          key={idx}
          radius="sm"
          p="md"
          bg="transparent"
        >
          <Title order={3} c="brand" size="h4" lh={1.25}>
            {edu.degree}
          </Title>
          <Text c="dimmed">{edu.institution}</Text>
          {edu.startDate && (
            <Text size="sm" c="dimmed">
              {edu.startDate}
            </Text>
          )}
        </Paper>
      ))}
    </Stack>
  );
}
