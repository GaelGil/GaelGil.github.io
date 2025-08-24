import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import { Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
      </Routes>
    </div>
  );
}
