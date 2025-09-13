import { ME_IMAGE } from "../../data/const";

export default function Photo() {
  return (
    <img
      src={ME_IMAGE}
      alt="Profile"
      className="rounded-full md:w-50 md:h-50 w-25 h-25 shadow-[0_4px_24px_rgba(25,118,210,0.10)]"
    />
  );
}
