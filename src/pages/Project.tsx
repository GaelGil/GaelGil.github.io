import { Link, useParams } from "@tanstack/react-router";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import {
  Button,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { PROJECTS } from "../data/projects";
import Badges from "../components/Home/Badges";
import Footer from "../components/Layout/Footer";

export default function Project() {
  const { id } = useParams({ strict: false });
  const project = PROJECTS.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <Container size="sm" py={80}>
        <Stack align="center" gap="md">
          <Title order={1} ta="center">
            Project Not Found
          </Title>
          <Text c="dimmed" ta="center">
            The project you are looking for does not exist or has moved.
          </Text>
          <Button
            component={Link}
            to="/projects"
            variant="light"
            color="brand"
            leftSection={<FaArrowLeft aria-hidden="true" />}
          >
            Back to projects
          </Button>
        </Stack>
      </Container>
    );
  }

  return (
    <Container size="md" py={{ base: "xl", md: 56 }}>
      <Stack gap="xl">
        <Button
          component={Link}
          to="/projects"
          variant="subtle"
          color="brand"
          leftSection={<FaArrowLeft aria-hidden="true" />}
          w="fit-content"
        >
          All projects
        </Button>

        <Card
          // withBorder
          radius="sm"
          p={{ base: "lg", md: "xl" }}
          bg="transparent"
        >
          <Grid gutter="xl" align="center">
            <Grid.Col span={{ base: 12, md: 7 }}>
              <Stack gap="md">
                <Title order={1} c="brand" lh={1.1}>
                  {project.title}
                </Title>
                <Text size="lg" c="dimmed" lh={1.7}>
                  {project.description}
                </Text>
                <Group gap={6}>
                  <Badges data={project.tags} h={10} w={10} badgeSize="sm" />
                </Group>
                <Group gap="sm">
                  {project.link && (
                    <Button
                      component="a"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="light"
                      color="brand"
                      leftSection={<TbWorld aria-hidden="true" />}
                    >
                      Live Demo
                    </Button>
                  )}
                  <Button
                    component="a"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="default"
                    leftSection={<FaGithub aria-hidden="true" />}
                  >
                    GitHub Repo
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }}>
              <Image
                src={project.img}
                alt={`${project.title} preview`}
                h={280}
                fit="cover"
                radius="sm"
              />
            </Grid.Col>
          </Grid>
        </Card>

        <Paper
          component="article"
          // withBorder
          radius="sm"
          p={{ base: "lg", md: "xl" }}
          bg="transparent"
        >
          <Stack gap="lg">
            <Stack gap={4}>
              <Title order={2}>Project Overview</Title>
              <Text c="dimmed">
                Notes on the idea, implementation, and what the project
                demonstrates.
              </Text>
            </Stack>
            <Text size="lg" lh={1.85}>
              {project.content}
            </Text>
          </Stack>
        </Paper>

        <Footer />
      </Stack>
    </Container>
  );
}
