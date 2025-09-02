import { ME_IMAGE } from "../../data/const";
import { Image } from "@mantine/core";
export default function Photo() {
  return <Image src={ME_IMAGE} alt="Profile" w={255} h={255} radius="100%" />;
}
