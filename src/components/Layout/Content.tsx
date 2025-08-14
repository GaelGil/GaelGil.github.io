import About from "../Home/About";
import Projects from "../Home/Projects";
import Hero from "../Home/Hero";
import Footer from "./Footer";
import Skills from "../Home/Skills";
import Education from "../Home/Education";
import Experince from "../Home/Experience";
export default function Home() {
  return (
    <main className="ml-[25%] h-screen px-8">
      <Hero />
      <About />
      <Projects />
      <Education />
      <Experince />

      <Skills />
      <Footer />
    </main>
  );
}
