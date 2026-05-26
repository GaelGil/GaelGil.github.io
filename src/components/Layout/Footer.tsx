import { NAME } from "../../data/const";
import { FaHeart } from "react-icons/fa";
import { Group, Text } from "@mantine/core";

export default function Footer() {
  return (
    <Group component="footer" gap={6} py="md" c="dimmed">
      <Text span size="sm">
        Made with
      </Text>
      <FaHeart size={13} aria-hidden="true" />
      <Text span size="sm">
        by {NAME}
      </Text>
    </Group>
  );
}
