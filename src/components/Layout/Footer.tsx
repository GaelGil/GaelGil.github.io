import { NAME } from "../../data/const";
import { FaHeart } from "react-icons/fa";
import { Text } from "@mantine/core";
export default function Footer() {
  return (
    <Text c={"main.0"}>
      Made with <FaHeart className=" inline-block mr-1" /> by
      {NAME}
    </Text>
  );
}
