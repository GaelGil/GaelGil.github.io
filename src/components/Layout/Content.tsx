import About from "../Home/About";
import Projects from "../Home/Projects";
import Skills from "../Home/Skills";
import Education from "../Home/Education";
import Experince from "../Home/Experience";
import Footer from "./Footer";
import Section from "./Section";
export default function Content() {
  return (
    <div className="space-y-12">
      <Section id="about" title="">
        <div className="grid grid-cols-1 gap-6">
          <About />
        </div>
      </Section>
      <Section id="other" title="Projects">
        <div className="flex flex-col gap-6">
          <Projects />
        </div>
      </Section>
      <Section id="education" title="Education">
        <div className="grid grid-cols-1 gap-6">
          <Education />
        </div>
      </Section>
      <Section id="experience" title="Experience">
        <div className="grid grid-cols-1 gap-6">
          <Experince />
        </div>
      </Section>
      <Section id="skills" title="Skills">
        <div className="grid grid-cols-1 gap-6">
          <Skills />
        </div>
      </Section>
      <section id="footer">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-8">
          <Footer />
        </div>
      </section>
    </div>
  );
}
