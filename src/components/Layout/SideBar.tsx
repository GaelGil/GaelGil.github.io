import { LINKEDIN_URL, GITHUB_URL, NAME, POSITION } from "../../data/const";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Photo from "../Home/Photo";
import { Text, Title, Anchor, Stack, Group } from "@mantine/core";

export default function Sidebar() {
  return (
    <Stack align="center" w="100%" p={"xl"}>
      <Stack align="left">
        {/* Profile photo */}
        <Photo />
        {/* Name & position */}
        <Title c={"var(--mantine-color-text-primary)"} order={1} mt="md">
          {NAME}
        </Title>
        <Text>{POSITION}</Text>
        {/* Links */}
        <Anchor
          c={"var(--mantine-color-text-primary)"}
          underline="never"
          href="#about"
          fw={700}
          tt="uppercase"
        >
          About
        </Anchor>
        <Anchor
          c={"var(--mantine-color-text-primary)"}
          underline="never"
          href="#projects"
          fw={700}
          tt="uppercase"
        >
          Projects
        </Anchor>
        <Anchor
          c={"var(--mantine-color-text-secondary)"}
          underline="never"
          href="#experience"
          fw={700}
          tt="uppercase"
        >
          Experience
        </Anchor>

        {/* Socials */}
        <Group>
          <Anchor
            c={"var(--mantine-color-text-secondary)"}
            href={GITHUB_URL}
            target="_blank"
          >
            <FaGithub size={24} />
          </Anchor>
          <Anchor
            c={"var(--mantine-color-text-secondary)"}
            href={LINKEDIN_URL}
            target="_blank"
          >
            <FaLinkedin size={24} />
          </Anchor>
        </Group>
      </Stack>
    </Stack>
  );
}
