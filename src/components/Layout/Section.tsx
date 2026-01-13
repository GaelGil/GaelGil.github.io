import React from "react";
import type { SectionProps } from "../../types/Section";
import { Stack, Title } from "@mantine/core";

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <Stack id={id}>
      <Stack maw={"90%"} justify="flex-end">
        <Title order={2} fw={700}>
          {title}
        </Title>
        {children}
      </Stack>
    </Stack>
  );
};

export default Section;
