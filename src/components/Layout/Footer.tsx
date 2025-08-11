import { NAME } from "../../data/const";
export default function Footer() {
  return (
    <section id="footer" className="md:ml-64  flex items-center">
      <footer className="text-black py-6 text-center">
        © {new Date().getFullYear()} {NAME} — All Rights Reserved
      </footer>
    </section>
  );
}
