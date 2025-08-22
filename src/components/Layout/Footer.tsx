import { NAME } from "../../data/const";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <section id="footer">
      <footer className="py-6 text-center text-secondary-300">
        Made with <FaHeart className="text-secondary-300 inline-block mr-1" />{" "}
        by {NAME}
      </footer>
    </section>
  );
}
