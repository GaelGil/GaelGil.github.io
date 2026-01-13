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
  Box,
  Stack,
  Container,
} from "@mantine/core";
import Footer from "../components/Layout/Footer";
export default function Project() {
  const { id } = useParams({ strict: false });
  const project = PROJECTS.find((p) => p.id === Number(id));

  if (!project) {
    return <Text>Project not found</Text>;
  }

  return (
    <Container mt={"xl"}>
      <Stack w={"100%"} align="center">
        <Anchor component={Link} to="/projects">
          <Button variant="light" color="red" leftSection={<FaArrowLeft />}>
            View All Projects
          </Button>
        </Anchor>

        <Title order={5}>{project.title}</Title>
        <Box>
          <Image src={project.img} alt={project.title} h={250} w={250} />
        </Box>
        <Flex gap={4}>
          {project.tags?.map((tag) => (
            <Badge key={tag} variant="light" color="red">
              {tag}
            </Badge>
          ))}
        </Flex>

        {project.link && (
          <Anchor href={project.link} target="_blank">
            Project
          </Anchor>
        )}
        <br />
        <Anchor href={project.repo} target="_blank">
          Repo
        </Anchor>
        <Text>{project.content}</Text>
        <Footer />
      </Stack>
    </Container>
  );
}
