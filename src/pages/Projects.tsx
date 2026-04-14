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
  Box,
  SimpleGrid,
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
        <Box w="100%">
          <Anchor component={Link} to={"/"}>
            <Button variant="transparent" leftSection={<FaArrowLeft />}>
              {NAME}
            </Button>
          </Anchor>
          <Title order={4}>All Projects</Title>

          <TextInput
            variant="filled"
            size="lg"
            radius="lg"
            c="brand.7"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Projects..."
            styles={{
              input: {
                border: "1px solid primary",
              },
            }}
          />
        </Box>
        <SimpleGrid cols={3} spacing={"1px"}>
          {[...searchedProjects].reverse().map((project) => (
            <Link
              to="/projects/$id"
              params={{ id: project.id.toString() }}
              key={project.id}
            >
              <Box
                mb="md"
                bdrs={12}
                style={{
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Image src={project.img} alt={project.title} fit="cover" />
                <Title order={5} c="brand.7">
                  {project.title}
                </Title>
                <Text> {project.description}</Text>
                {/* Tags */}
                <Flex gap={4} wrap="wrap">
                  {project.tags?.map((tag) => (
                    <Badge key={tag} variant="light" color="brand.7">
                      {tag}
                    </Badge>
                  ))}
                </Flex>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
        <Footer />
      </Stack>
    </Container>
  );
}
