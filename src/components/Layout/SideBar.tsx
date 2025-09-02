import { LINKEDIN_URL, GITHUB_URL } from "../../data/const";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { NAME, POSITION } from "../../data/const";
import Photo from "../Home/Photo";
import { Text, Title, Anchor, Box } from "@mantine/core";
export default function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:mt-16 lg:mb-16 md:w-2/5 h-auto md:h-screen flex justify-center">
      <Box className="max-w-sm">
        <Photo />
        <br />
        <Title c={"main.7"} order={1}>
          {NAME}
        </Title>
        <Text c={"main.7"}>{POSITION}</Text>
        <nav className="mt-8 space-y-2 lg:block md:bl sm:flex">
          <a
            c={"main.7"}
            href="#about"
            className="block font-bold uppercase hover:text-primary-600 cursor-pointer"
          >
            About
          </a>
          <a
            href="#projects"
            className="block font-bold uppercase hover:text-primary-600 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="block font-bold uppercase hover:text-primary-600 cursor-pointer"
          >
            Experience
          </a>
        </nav>
        <Box display={"flex"} mt={"auto"}>
          <Anchor href={GITHUB_URL} target="_blank">
            <FaGithub size={24} />
          </Anchor>
          <Anchor href={LINKEDIN_URL} target="_blank">
            <FaLinkedin size={24} />
          </Anchor>
        </Box>
      </Box>
    </aside>
  );
}
