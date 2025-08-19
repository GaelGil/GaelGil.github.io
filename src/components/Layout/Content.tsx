import About from "../Home/About";
import Projects from "../Home/Projects";
import Footer from "./Footer";
import Skills from "../Home/Skills";
import Education from "../Home/Education";
import Experince from "../Home/Experience";
export default function Content() {
  return (
    <main className="w-full md:w-3/5 md:ml-2/5 px-8 py-12 space-y-12">
      <About />
      <Projects />
      <Education />
      <Experince />
      <Skills />
      <Footer />
    </main>
  );
}
