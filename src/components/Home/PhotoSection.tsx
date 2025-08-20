import { ME_IMAGE } from "../../data/const";

export default function Photo() {
  return (
    <div className="flex justify-center">
      <img
        src={ME_IMAGE}
        alt="Profile"
        className="w-60 h-60 rounded-full shadow-lg border-2 border-white"
      />
    </div>
  );
}
