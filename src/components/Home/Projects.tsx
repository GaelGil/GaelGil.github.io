import {
  Title,
  Text,
  Badge,
  Button,
  Anchor,
  Box,
  Image,
  Flex,
  Card,
} from "@mantine/core";
import { PROJECTS } from "../../data/projects";
import { Link } from "@tanstack/react-router";
import { FiArrowUpRight } from "react-icons/fi";
export default function Projects() {
  return (
    <Card>
      {[...PROJECTS]
        .reverse()
        .slice(0, 4)
        .map((project) => (
          <Link
            key={project.id}
            to="/projects/$id"
            params={{ id: project.id.toString() }}
          >
            <Flex h={250}>
              <Box style={{ flex: 1 }}>
                <Flex h="100%" direction="column" justify="space-between">
                  <Box>
                    <Title mt="md" c="brand.7" order={5}>
                      {project.title}
                    </Title>
                    <Text>{project.description}</Text>
                    <Box>
                      {project.tags?.map((tag) => (
                        <Badge key={tag} variant="light" color="brand.7">
                          {tag}
                        </Badge>
                      ))}
                    </Box>
                  </Box>
                </Flex>
              </Box>
              <Image
                src={project.img}
                alt={project.title}
                h={250}
                w={250}
                fit="fill"
              />
            </Flex>
          </Link>
        ))}

      <Anchor component={Link} to="/projects">
        <Button
          rightSection={<FiArrowUpRight />}
          variant="light"
          color="brand.7"
        >
          View All Projects
        </Button>
      </Anchor>
    </Card>
  );
}
