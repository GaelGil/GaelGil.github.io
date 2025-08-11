import { ME_IMAGE } from "../../data/const";

export default function Photo() {
  return (
    <div className="flex justify-center">
      <img
        src={ME_IMAGE}
        alt="Profile"
        className="w-50 h-50 rounded-full shadow-lg border-4 border-white"
      />
    </div>
  );
}
