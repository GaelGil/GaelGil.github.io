import About from "../components/Home/About";
import Projects from "../components/Home/ProjectsSection";
import Hero from "../components/Home/Hero";
import Sidebar from "../components/Layout/SideBar";
import Footer from "../components/Layout/Footer";

export default function Home() {
  return (
    <div>
      <Sidebar />

      <main className="ml-[50%] h-screen overflow-y-scroll scrollbar-hide px-8">
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
