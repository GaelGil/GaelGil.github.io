import { Image } from "@mantine/core";
import { ME_IMAGE } from "../../data/const";

export default function Photo() {
  return <Image src={ME_IMAGE} alt="Profile" />;
}
