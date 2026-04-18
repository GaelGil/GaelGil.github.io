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
import Badges from "../components/Home/Badges";
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
              <Button
                variant="light"
                color="brand.7"
                leftSection={<FaArrowLeft />}
              >
                View All Projects
              </Button>
            </Anchor>

            <Flex h={250}>
              <Box style={{ flex: 1 }}>
                <Flex h="100%" direction="column" justify="space-between">
                  <Box>
                    <Title mt="md" c="brand.7" order={5}>
                      {project.title}
                    </Title>
                    <Text>{project.description}</Text>
                    <Box>
                      <Badges
                        data={project.tags}
                        h={10}
                        w={10}
                        badgeSize="sm"
                      />
                    </Box>
                    <Flex gap={4}>
                      {project.link && (
                        <Anchor href={project.link} target="_blank">
                          <Button
                            variant="transparent"
                            leftSection={<TbWorld />}
                          >
                            Live Demo
                          </Button>
                        </Anchor>
                      )}
                      <Anchor href={project.repo} target="_blank">
                        <Button
                          variant="transparent"
                          leftSection={<FaGithub />}
                        >
                          Git Repo
                        </Button>
                      </Anchor>
                    </Flex>
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
            <Box>
              <Title order={5}>{project.title}</Title>
            </Box>
            {/*<Flex gap={4}>
              {project.tags?.map((tag) => (
                <Badge key={tag} variant="light" color="brand.7">
                  {tag}
                </Badge>
              ))}
            </Flex>*/}

            {/*<Flex gap={4}>
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
            </Flex>*/}
            <Flex>
              <Text>{project.content}</Text>
            </Flex>
          </Stack>
          {/*<Image
            src={project.img}
            alt={project.title}
            h={350}
            w={350}
            fit="fill"
          />*/}
        </Flex>
        {/*<Flex>
          <Text>{project.content}</Text>
        </Flex>*/}
        <Footer />
      </Stack>
    </Container>
  );
}
