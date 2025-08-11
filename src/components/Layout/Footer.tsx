import { NAME } from "../../data/const";
export default function Footer() {
  return (
    <footer className="text-black py-6 text-center">
      © {new Date().getFullYear()} {NAME} — All Rights Reserved
    </footer>
  );
}
