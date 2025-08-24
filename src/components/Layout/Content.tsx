import About from "../Home/About";
import Projects from "../Home/Projects";
import Footer from "./Footer";
import Skills from "../Home/Skills";
import Education from "../Home/Education";
import Experince from "../Home/Experience";
export default function Content() {
  return (
    <main className="w-full md:w-3/5 md:ml-2/5 px-8 py-12 ">
      <section id="about" className="sm:px-6 md:px-8 py-8 md:py-12">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-8">
          <About />
        </div>
      </section>

      <section id="" className="sm:px-6 md:px-8 py-8 md:py-12 bg-navyLight">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-8">
          <h4 className="text-xl block font-bold mb-10">Projects</h4>
          <div className="flex flex-col gap-6">
            <Projects />
          </div>
        </div>
      </section>
      <section id="education" className="sm:px-6 md:px-8 py-8 md:py-12">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-8">
          <h4 className="text-xl block font-bold mb-10">Education</h4>
          <div className="grid grid-cols-1 gap-6">
            <Education />
          </div>
        </div>
      </section>
      <section id="experience" className="sm:px-6 md:px-8 py-8 md:py-12">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-8">
          <h4 className="text-xl block font-bold mb-10">Experience</h4>
          <div className="grid grid-cols-1 gap-6">
            <Experince />
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="sm:px-6 md:px-8 py-8 md:py-12 bg-navyLight"
      >
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-8">
          <h4 className="text-xl block font-bold mb-10">Skills</h4>
          <Skills />
        </div>
      </section>
      <section id="footer">
        <div className="max-w-3xl mx-auto md:mx-0 md:ml-8">
          <Footer />
        </div>
      </section>
    </main>
  );
}
