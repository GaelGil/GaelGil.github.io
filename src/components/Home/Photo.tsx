import { ME_IMAGE } from "../../data/const";

export default function Photo() {
  return (
    <img
      src={ME_IMAGE}
      alt="Profile"
      className="rounded-full shadow-lg md:w-80 md:h-80 w-40 h-40"
    />
  );
}
