import { PROJECTS } from "../data/projects";
import type { Project } from "../types/Project";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { NAME } from "../data/const";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";
import Footer from "../components/Layout/Footer";
import {
  TextInput,
  Title,
  Anchor,
  Button,
  Text,
  Badge,
  Flex,
  Image,
  Stack,
  Container,
} from "@mantine/core";
export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [projects] = useState<Project[]>(PROJECTS);
  const [searchedProjects, setSearchedProjects] = useState<Project[]>(PROJECTS);

  useEffect(() => {
    const filteredProjects = projects.filter((project) => {
      const projectName = project.title.toLowerCase();
      const searchQueryLower = searchQuery.toLowerCase();
      return projectName.includes(searchQueryLower);
    });
    setSearchedProjects(filteredProjects);
  }, [searchQuery, projects]);

  return (
    <Container mt={"xl"}>
      <Stack w={"100%"} align="center">
        <Anchor component={Link} to={"/"}>
          <Button variant="transparent" leftSection={<FaArrowLeft />}>
            {NAME}
          </Button>
        </Anchor>
        <Title order={4}>All Projects</Title>

        <TextInput
          variant="light"
          size="lg"
          radius="lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Projects..."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...searchedProjects].reverse().map((project) => (
            <Link
              to="/projects/$id"
              params={{ id: project.id.toString() }}
              key={project.id}
              className="rounded-xl hover:bg-tertiary-300 cursor-pointer flex flex-col"
            >
              <Image src={project.img} alt={project.title} fit="fill" />
              <Title order={5}>{project.title}</Title>
              <Text>{project.description}</Text>
              {/* Tags */}
              <Flex gap={4} wrap="wrap">
                {project.tags?.map((tag) => (
                  <Badge key={tag} variant="light" color="red">
                    {tag}
                  </Badge>
                ))}
              </Flex>
            </Link>
          ))}
        </div>
        <Footer />
      </Stack>
    </Container>
  );
}
