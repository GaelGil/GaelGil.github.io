import About from "../Home/About";
import Projects from "../Home/Projects";
import Skills from "../Home/Skills";
import Education from "../Home/Education";
import Experince from "../Home/Experience";
import Footer from "./Footer";
import Section from "./Section";
export default function Content() {
  return (
    <main className="w-full md:w-3/5 md:ml-2/5 px-8 py-12 ">
      <Section id="about" title="">
        <About />
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
        <Skills />
      </Section>
      <section id="footer">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-8">
          <Footer />
        </div>
      </section>
    </main>
  );
}
