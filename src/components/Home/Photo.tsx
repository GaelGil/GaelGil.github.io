import { Image } from "@mantine/core";
import { ME_IMAGE, NAME } from "../../data/const";

export default function Photo() {
  return (
    <Image
      src={ME_IMAGE}
      alt={`${NAME} profile photo`}
      fit="cover"
      w={220}
      h={220}
      radius="sm"
    />
  );
}
