import About from "../Home/About";
import Projects from "../Home/Projects";
import Footer from "./Footer";
import Skills from "../Home/Skills";
import Education from "../Home/Education";
import Experince from "../Home/Experience";
export default function Content() {
  return (
    <main className="ml-[25%] h-screen px-8">
      <About />
      <Projects />
      <Education />
      <Experince />

      <Skills />
      <Footer />
    </main>
  );
}
