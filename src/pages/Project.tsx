import { useParams, Link } from "@tanstack/react-router";
import { PROJECTS } from "../data/projects";
import { FaArrowLeft } from "react-icons/fa";
import {
  Badge,
  Image,
  Flex,
  Text,
  Title,
  Anchor,
  Button,
  Stack,
  Container,
  Box,
} from "@mantine/core";
import Footer from "../components/Layout/Footer";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
export default function Project() {
  const { id } = useParams({ strict: false });
  const project = PROJECTS.find((p) => p.id === Number(id));

  if (!project) {
    return <Text>Project not found</Text>;
  }

  return (
    <Container mt="xl">
      <Stack w={"100%"} align="center">
        <Flex>
          <Stack>
            <Anchor component={Link} to="/projects">
              <Button variant="light" color="red" leftSection={<FaArrowLeft />}>
                View All Projects
              </Button>
            </Anchor>

            <Box>
              <Title order={5}>{project.title}</Title>
            </Box>
            <Flex gap={4}>
              {project.tags?.map((tag) => (
                <Badge key={tag} variant="light" color="red">
                  {tag}
                </Badge>
              ))}
            </Flex>

            <Flex gap={4}>
              {project.link && (
                <Anchor href={project.link} target="_blank">
                  <Button variant="transparent" leftSection={<TbWorld />}>
                    Live Demo
                  </Button>
                </Anchor>
              )}
              <Anchor href={project.repo} target="_blank">
                <Button variant="transparent" leftSection={<FaGithub />}>
                  Git Repo
                </Button>
              </Anchor>
            </Flex>
          </Stack>
          <Image
            src={project.img}
            alt={project.title}
            h={350}
            w={350}
            fit="fill"
          />
        </Flex>
        <Flex>
          <Text>{project.content}</Text>
        </Flex>
        <Footer />
      </Stack>
    </Container>
  );
}
