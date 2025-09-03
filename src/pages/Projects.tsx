import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import type { Project } from "../types/Project";
import { NAME } from "../data/const";
import { FaArrowLeft } from "react-icons/fa";
import {
  Box,
  TextInput,
  SimpleGrid,
  Card,
  Image,
  Text,
  Badge,
  Stack,
  Anchor,
} from "@mantine/core";

export default function Projects() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [projects] = useState<Project[]>(PROJECTS);
  const [searchedProjects, setSearchedProjects] = useState<Project[]>(PROJECTS);

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchedProjects(filtered);
  }, [searchQuery, projects]);

  return (
    <Box bg={"main.9"} maw={1200} mx="auto" p="xl" mih={"100vh"}>
      {/* Back Link */}
      <Anchor
        component="button"
        variant="text"
        onClick={() => navigate("/")}
        mb="lg"
      >
        <FaArrowLeft className="inline-block mr-2" />
        {NAME}
      </Anchor>

      <Text fw={700} size="xl" mb="xl">
        All Projects
      </Text>

      {/* Search */}
      <TextInput
        placeholder="Search Projects..."
        variant="filled"
        mb="xl"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.currentTarget.value)}
        styles={{
          input: {
            backgroundColor: "var(--mantine-color-main-9)", // Replace with your desired background color
            color: "var(--mantine-color-main-5)", // Replace with your desired text color
            border: "1px solid var(--mantine-color-main-5)", // Replace with your desired border color
          },
        }}
      />

      {/* Projects Grid */}
      <SimpleGrid cols={3} spacing="lg">
        {[...searchedProjects].reverse().map((project) => (
          <Card
            key={project.id}
            bg={"none"}
            shadow="xl"
            p="md"
            bd={"1px solid main.5"}
            radius="md"
            withBorder
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            <Card.Section>
              <Image
                src={project.img}
                bd={"1px solid main.5"}
                bdrs={"md"}
                alt={project.title}
                height={50}
              />
            </Card.Section>
            <Stack mt="sm">
              <Text c={"main.8"} fw={600}>
                {project.title}
              </Text>
              <Text size="sm" c="main.5">
                {project.description}
              </Text>
              <Box mt="sm">
                {project.tags?.map((tag) => (
                  <Badge key={tag} variant="outline" color="main.5" size="sm">
                    {tag}
                  </Badge>
                ))}
              </Box>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}
