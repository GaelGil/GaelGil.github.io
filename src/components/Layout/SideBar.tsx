import { LINKEDIN_URL, GITHUB_URL, NAME, POSITION } from "../../data/const";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Photo from "../Home/Photo";
import { Text, Title, Anchor, Box, Stack, Group } from "@mantine/core";

export default function Sidebar() {
  return (
    <Box>
      <Photo />

      <Title c="main.0" order={1} mt="md">
        {NAME}
      </Title>
      <Text c="main.7">{POSITION}</Text>

      <Stack mt="xl">
        <Anchor
          c={"main.0"}
          underline="never"
          href="#about"
          fw={700}
          tt="uppercase"
        >
          About
        </Anchor>
        <Anchor
          c={"main.0"}
          underline="never"
          href="#projects"
          fw={700}
          tt="uppercase"
        >
          Projects
        </Anchor>
        <Anchor
          c={"main.0"}
          underline="never"
          href="#experience"
          fw={700}
          tt="uppercase"
        >
          Experience
        </Anchor>
      </Stack>

      <Group mt="xl">
        <Anchor c={"main.0"} href={GITHUB_URL} target="_blank">
          <FaGithub size={24} />
        </Anchor>
        <Anchor c={"main.0"} href={LINKEDIN_URL} target="_blank">
          <FaLinkedin size={24} />
        </Anchor>
      </Group>
    </Box>
  );
}
