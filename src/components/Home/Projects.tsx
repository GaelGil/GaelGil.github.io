import {
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
