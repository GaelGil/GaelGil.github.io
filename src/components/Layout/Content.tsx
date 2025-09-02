import About from "../Home/About";
import Projects from "../Home/Projects";
import Skills from "../Home/Skills";
import Education from "../Home/Education";
import Experince from "../Home/Experience";
import Footer from "./Footer";
import Section from "./Section";
import { Stack, SimpleGrid, Container } from "@mantine/core";
export default function Content() {
  return (
    <Container p={"xl"}>
      <Section id="about" title="">
        <About />
      </Section>

      <Section id="projects" title="Projects">
        <Stack gap="md">
          <Projects />
        </Stack>
      </Section>

      <Section id="education" title="Education">
        <SimpleGrid cols={1} spacing="md">
          <Education />
        </SimpleGrid>
      </Section>

      <Section id="experience" title="Experience">
        <SimpleGrid cols={1} spacing="md">
          <Experince />
        </SimpleGrid>
      </Section>

      <Section id="skills" title="Skills">
        <Skills />
      </Section>
      <Section id="footer" title="">
        <Container size="lg" px="md" ta={"center"}>
          <Footer />
        </Container>
      </Section>
    </Container>
  );
}
