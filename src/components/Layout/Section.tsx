import React from "react";
import type { SectionProps } from "../../types/Section";
import { Box, Stack, Title } from "@mantine/core";

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <Stack component="section" id={id} gap="lg" maw={760} style={{ scrollMarginTop: 80 }}>
      <Stack gap="xs">
        <Title order={2} fw={700} size="h2" lh={1.1}>
          {title}
        </Title>
        <Box w={44} h={2} bg="brand.5" />
      </Stack>
      <Stack gap="md">
        {children}
      </Stack>
    </Stack>
  );
};

export default Section;
