import { Image } from "@mantine/core";
import { ME_IMAGE } from "../../data/const";

export default function Photo() {
  return <Image w={250} h={250} src={ME_IMAGE} alt="Profile" radius="xl" />;
}
