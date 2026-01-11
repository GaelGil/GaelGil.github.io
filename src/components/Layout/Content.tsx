import About from "../Home/About";
import Projects from "../Home/Projects";
import Skills from "../Home/Skills";
import Education from "../Home/Education";
import Experince from "../Home/Experience";
import Footer from "./Footer";
import Section from "./Section";
import { Stack } from "@mantine/core";
export default function Content() {
  return (
    <Stack mt="xl">
      <Section id="about" title="">
        <About />
      </Section>
      <Section id="other" title="Projects">
        <Projects />
      </Section>
      <Section id="experience" title="Experience">
        <Experince />
      </Section>
      <Section id="education" title="Education">
        <Education />
      </Section>
      <Section id="skills" title="Skills">
        <Skills />
      </Section>
      <section id="footer">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-8">
          <Footer />
        </div>
      </section>
    </Stack>
  );
}
