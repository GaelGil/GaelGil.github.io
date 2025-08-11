import About from "../Home/About";
import Projects from "../Home/ProjectsSection";
import Hero from "../Home/Hero";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="ml-[50%] h-screen overflow-y-scroll scrollbar-hide px-8">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
