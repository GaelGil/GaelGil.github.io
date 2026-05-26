import { Flex } from "@mantine/core";
import { SKILLS } from "../../data/skills";
import Badges from "./Badges";
export default function Skills() {
  return (
    <Flex gap={4} wrap="wrap" justify="center">
      <Badges data={SKILLS} w={25} h={25} badgeSize="lg" />
    </Flex>
  );
}
