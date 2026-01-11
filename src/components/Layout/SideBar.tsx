import { LINKEDIN_URL, GITHUB_URL } from "../../data/const";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { NAME, POSITION } from "../../data/const";
import Photo from "../Home/Photo";
import { Title, Text, Anchor, Stack, Flex } from "@mantine/core";
export default function Sidebar() {
  return (
    <Stack mt="xl">
      <Stack>
        <Photo />
        <Title order={1} c="red.9">
          {NAME}
        </Title>
        <Text>{POSITION}</Text>
      </Stack>
      <Stack>
        <Anchor href="#about" fw={700} fz="xl" c="red.9 ">
          About
        </Anchor>
        <Anchor href="#projects" fw={700} fz="xl" c="red.9 ">
          Projects
        </Anchor>
        <Anchor href="#experience" fw={700} fz="xl" c="red.9 ">
          Experience
        </Anchor>
      </Stack>
      <Flex gap={16}>
        <Anchor
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex hover:text-primary-600"
        >
          <FaGithub size={24} />
        </Anchor>
        <Anchor
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex hover:text-primary-600"
        >
          <FaLinkedin size={24} />
        </Anchor>
      </Flex>
    </Stack>
  );
}
