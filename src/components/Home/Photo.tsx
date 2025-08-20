import { ME_IMAGE } from "../../data/const";

export default function Photo() {
  return (
    <img
      src={ME_IMAGE}
      alt="Profile"
      className="rounded-full md:w-50 md:h-50 w-25 h-25"
    />
  );
}
