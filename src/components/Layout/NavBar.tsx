import { NAME } from "../../data/const";
export default function NavBar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{NAME}</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#education" className="hover:text-blue-600">
              Education
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
