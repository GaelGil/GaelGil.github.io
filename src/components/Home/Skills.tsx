import { Group } from "@mantine/core";
import { SKILLS } from "../../data/skills";
import Badges from "./Badges";

export default function Skills() {
  return (
    <Group gap={8} justify="flex-start">
      <Badges data={SKILLS} w={25} h={25} badgeSize="lg" />
    </Group>
  );
}
