import React from "react";
import type { SectionProps } from "../../types/Section";
import { Box, Title, Container } from "@mantine/core";

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <Box component="section" id={id} p="xl">
      <Container>
        {title && (
          <Title c={"main.0"} order={2} fw={600} mb="xl">
            {title}
          </Title>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default Section;
