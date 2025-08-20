import { NAME } from "../../data/const";
export default function Footer() {
  return (
    <section id="footer">
      <footer className="py-6 text-center text-secondary-300">
        Made with 💜 by {NAME}
      </footer>
    </section>
  );
}
