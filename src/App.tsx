// import Home from "./pages/Home";
// import Footer from "./components/Layout/Footer";
// import NavBar from "./components/Layout/NavBar";
import About from "./components/Home/About";
import Projects from "./components/Home/ProjectsSection";
import Hero from "./components/Home/Hero";
import Sidebar from "./components/Home/SideBar";
import { useEffect, useState } from "react";
export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div
      className={`${dark ? "bg-navy text-e6f1ff" : "bg-white text-slate-900"}`}
    >
      {/* Fixed Sidebar */}
      <Sidebar onToggleTheme={() => setDark((s) => !s)} dark={dark} />

      {/* Scrollable Content */}
      <main className="ml-[50%] h-screen overflow-y-scroll scrollbar-hide px-8">
        <Hero />
        <About />
        <Projects />
        <footer className="px-8 py-12 text-slate">
          © {new Date().getFullYear()} — Built with ❤️
        </footer>
      </main>
    </div>
  );
}
