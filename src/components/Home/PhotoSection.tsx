import { ME_IMAGE } from "../../data/const";

export default function Photo() {
  return (
    <div className="flex justify-center">
      <img
        src={ME_IMAGE}
        alt="Profile"
        className="w-99 h-99 rounded-full shadow-lg border-4 border-white"
      />
    </div>
  );
}
