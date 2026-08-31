import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { PROJECTS } from "../../data/projects";
import { Link } from "@tanstack/react-router";
import { FiArrowUpRight } from "react-icons/fi";
import Badges from "./Badges";

export default function Projects() {
  return (
    <Stack gap="lg">
      {[...PROJECTS]
        .reverse()
        .slice(0, 4)
        .map((project) => (
          <Link
            key={project.id}
            to="/projects/$id"
            params={{ id: project.id.toString() }}
            aria-label={`View ${project.title} project`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Card component="article" radius="sm" p="md" bg="transparent">
              <Grid gutter="md" align="stretch">
                <Grid.Col span={{ base: 12, sm: 8 }}>
                  <Stack h="100%" justify="space-between" gap="sm">
                    <Stack gap="xs">
                      <Group
                        justify="space-between"
                        align="flex-start"
                        wrap="nowrap"
                      >
                        <Title order={3} c="brand" size="h4" lh={1.25}>
                          {project.title}
                          {project.status === "in-progress" && (
                            <Badge
                              component="span"
                              leftSection={<span aria-hidden="true">•</span>}
                              ml="xs"
                              px={8}
                              py={4}
                              h="auto"
                              radius={9999}
                              bg="rgba(245, 158, 11, 0.12)"
                              c="#fbbf24"
                              fz="0.75rem"
                              fw={500}
                              tt="none"
                              style={{ verticalAlign: "baseline" }}
                            >
                              In progress
                            </Badge>
                          )}
                        </Title>
                      </Group>

                      <Text c="dimmed" lh={1.65}>
                        {project.description}
                      </Text>
                    </Stack>

                    <Group gap={6}>
                      <Badges
                        data={project.tags}
                        h={10}
                        w={10}
                        badgeSize="sm"
                      />
                    </Group>
                  </Stack>
                </Grid.Col>

                <Grid.Col span={{ base: 12, sm: 4 }}>
                  <Image
                    src={project.img}
                    alt={`${project.title} preview`}
                    fit="cover"
                    h={148}
                    radius="sm"
                  />
                </Grid.Col>
              </Grid>
            </Card>
          </Link>
        ))}

      <Button
        component={Link}
        to="/projects"
        rightSection={<FiArrowUpRight aria-hidden="true" />}
        variant="light"
        color="brand"
        w="fit-content"
      >
        View all projects
      </Button>
    </Stack>
  );
}
