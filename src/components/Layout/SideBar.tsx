import { LINKEDIN_URL, GITHUB_URL, NAME, POSITION } from "../../data/const";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Photo from "../Home/Photo";
import { Text, Title, Anchor, Stack, Group } from "@mantine/core";

export default function Sidebar() {
  return (
    <Stack
      align="center" // <-- aligns all children to the right
      w="100%"
      p={"xl"}
    >
      <Stack align="left">
        {/* Profile photo */}
        <Photo />
        {/* Name & position */}
        <Title c="main.0" order={1} mt="md">
          {NAME}
        </Title>
        <Text c="main.0">{POSITION}</Text>
        {/* Links */}
        <Anchor
          underline="never"
          c="main.0"
          href="#about"
          fw={700}
          tt="uppercase"
        >
          About
        </Anchor>
        <Anchor
          underline="never"
          c="main.0"
          href="#projects"
          fw={700}
          tt="uppercase"
        >
          Projects
        </Anchor>
        <Anchor
          underline="never"
          c="main.0"
          href="#experience"
          fw={700}
          tt="uppercase"
        >
          Experience
        </Anchor>

        {/* Socials */}
        <Group>
          <Anchor c="main.0" href={GITHUB_URL} target="_blank">
            <FaGithub size={24} />
          </Anchor>
          <Anchor c="main.0" href={LINKEDIN_URL} target="_blank">
            <FaLinkedin size={24} />
          </Anchor>
        </Group>
      </Stack>
    </Stack>
  );
}
