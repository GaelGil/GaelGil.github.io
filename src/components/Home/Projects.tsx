import {
  Title,
  Text,
  Badge,
  Button,
  Anchor,
  Box,
  Image,
  Flex,
} from "@mantine/core";
import { PROJECTS } from "../../data/projects";
import { Link } from "@tanstack/react-router";
import { FiArrowUpRight } from "react-icons/fi";
export default function Projects() {
  return (
    <>
      {[...PROJECTS]
        .reverse()
        .slice(0, 4)
        .map((project) => (
          <Link
            key={project.id}
            to="/projects/$id"
            params={{ id: project.id.toString() }}
          >
            <Flex>
              <Box>
                <Title c="red.9" order={5}>
                  {project.title}
                </Title>
                <Text>{project.description}</Text>
                {/* Tags */}
                <Box>
                  {project.tags?.map((tag) => (
                    <Badge key={tag} variant="light" color="rgba(255, 0, 0, 1)">
                      {tag}
                    </Badge>
                  ))}
                </Box>
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

      {/* View All Button */}

      <Anchor component={Link} to="/projects">
        <Button rightSection={<FiArrowUpRight />} variant="light" color="red.9">
          View All Projects
        </Button>
      </Anchor>
    </>
  );
}
