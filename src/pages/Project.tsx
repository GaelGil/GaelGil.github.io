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
        <Text c={"var(--mantine-color-text-primary)"} fw={600}>
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
        c={"var(--mantine-color-text-primary)"}
        style={{
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        <FaArrowLeft style={{ marginRight: 6 }} />
        Back to Projects
      </Anchor>

      <Stack>
        {/* Project Title */}
        <Title c={"var(--mantine-color-text-primary)"} order={3}>
          {project.title}
        </Title>

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
            <Badge
              key={tag}
              variant="light"
              color={"var(--mantine-color-text-secondary)"}
            >
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
              c={"var(--mantine-color-text-secondary)"}
            >
              Live Project
            </Anchor>
          )}
          {project.repo && (
            <Anchor
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              c={"var(--mantine-color-text-secondary)"}
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
