import About from "../components/Home/AboutSection";
import Photo from "../components/Home/PhotoSection";
import Projects from "../components/Home/Projects";
import Education from "../components/Home/EducationSection";
import Skills from "../components/Home/Skills";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      <main className="container mx-auto px-6 py-10 space-y-20">
        <section id="about">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 flex justify-center">
              <Photo />
            </div>
            <div className="md:w-1/2">
              <About />
            </div>
          </div>
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </main>
    </div>
  );
}
