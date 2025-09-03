import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import { FaArrowLeft } from "react-icons/fa";
import {
  Container,
  Anchor,
  Title,
  Image,
  Group,
  Badge,
  Text,
  Stack,
  Box,
} from "@mantine/core";

export default function Project() {
  const navigate = useNavigate();
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <Container size="md" py="xl">
        <Text c="red" fw={600}>
          Project not found
        </Text>
        <Anchor
          mt="md"
          component="button"
          onClick={() => navigate("/projects")}
        >
          <FaArrowLeft style={{ marginRight: 6 }} />
          Back to Projects
        </Anchor>
      </Container>
    );
  }

  return (
    <Container size="md" py="xl">
      {/* Back link */}
      <Anchor
        component="button"
        onClick={() => navigate("/projects")}
        mb="lg"
        style={{
          display: "inline-flex",
          alignItems: "center",
          color: "main.5",
          "&:hover": {
            color: "main.5",
          },
        }}
      >
        <FaArrowLeft style={{ marginRight: 6 }} />
        Back to Projects
      </Anchor>

      <Stack>
        {/* Project Title */}
        <Title order={3}>{project.title}</Title>

        {/* Project Image */}
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src={project.img}
            alt={project.title}
            radius="md"
            maw={600}
            fit="contain"
          />
        </Box>

        {/* Tags */}
        <Group wrap="wrap">
          {project.tags?.map((tag) => (
            <Badge key={tag} variant="light" color="main.5">
              {tag}
            </Badge>
          ))}
        </Group>

        {/* Links */}
        <Group>
          {project.link && (
            <Anchor
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Project
            </Anchor>
          )}
          {project.repo && (
            <Anchor
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </Anchor>
          )}
        </Group>

        {/* Project Description */}
        <Text size="md" lh="1.6">
          {project.content}
        </Text>
      </Stack>
    </Container>
  );
}
