import { NAME } from "../../data/const";
export default function Footer() {
  return (
    <section id="footer" className="md:ml-64  flex items-center">
      <footer className="text-black py-6 text-center text-secondary-300">
        Made with 💜 by {NAME}
      </footer>
    </section>
  );
}
