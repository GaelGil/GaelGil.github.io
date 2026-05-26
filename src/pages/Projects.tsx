import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import {
  Button,
  Card,
  Container,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { PROJECTS } from "../data/projects";
import { NAME } from "../data/const";
import Badges from "../components/Home/Badges";
import Footer from "../components/Layout/Footer";

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");

  const projects = useMemo(() => [...PROJECTS].reverse(), []);
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return projects;
    }

    return projects.filter((project) => {
      const searchableText = [
        project.title,
        project.description,
        project.content,
        ...project.tags,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [projects, searchQuery]);

  return (
    <Container size="lg" py={{ base: "xl", md: 56 }}>
      <Stack gap="xl">
        <Stack gap="lg">
          <Button
            component={Link}
            to="/"
            variant="subtle"
            color="brand"
            leftSection={<FaArrowLeft aria-hidden="true" />}
            w="fit-content"
          >
            {NAME}
          </Button>

          <Group justify="space-between" align="flex-end" gap="lg">
            <Stack gap={4}>
              <Title order={1}>Projects</Title>
              <Text c="dimmed" maw={640}>
                Search through machine learning, AI, data, and full-stack work.
              </Text>
            </Stack>

            <Text c="dimmed" size="sm">
              {filteredProjects.length} of {PROJECTS.length} projects
            </Text>
          </Group>

          <TextInput
            aria-label="Search projects"
            name="project-search"
            autoComplete="off"
            variant="filled"
            size="lg"
            radius="sm"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.currentTarget.value)}
            placeholder="Search Projects…"
            leftSection={<FaSearch aria-hidden="true" />}
          />
        </Stack>

        {filteredProjects.length > 0 ? (
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to="/projects/$id"
                params={{ id: project.id.toString() }}
                style={{ color: "inherit", textDecoration: "none" }}
                aria-label={`View ${project.title} project`}
              >
                <Card radius="sm" p="md" bg="transparent" h="100%">
                  <Card.Section>
                    <Image
                      src={project.img}
                      alt={`${project.title} preview`}
                      h={180}
                      fit="cover"
                      loading="lazy"
                    />
                  </Card.Section>

                  <Stack gap="sm" mt="md" h="100%">
                    <Title order={2} size="h4" c="brand" lh={1.25}>
                      {project.title}
                    </Title>
                    <Text c="dimmed" lh={1.6}>
                      {project.description}
                    </Text>
                    <Group gap={6} mt="auto">
                      <Badges
                        data={project.tags}
                        h={10}
                        w={10}
                        badgeSize="sm"
                      />
                    </Group>
                  </Stack>
                </Card>
              </Link>
            ))}
          </SimpleGrid>
        ) : (
          <Card withBorder radius="sm" p="xl" bg="dark.8">
            <Stack align="center" gap="sm">
              <Title order={2} size="h3">
                No projects found
              </Title>
              <Text c="dimmed" ta="center">
                Try a different title, technology, or topic.
              </Text>
              <Button
                variant="light"
                color="brand"
                onClick={() => setSearchQuery("")}
              >
                Clear search
              </Button>
            </Stack>
          </Card>
        )}

        <Footer />
      </Stack>
    </Container>
  );
}
