import { Title, Text, Badge, Button, Anchor, Box, Image } from "@mantine/core";
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
            className="rounded-md hover:bg-tertiary-300 cursor-pointer flex"
          >
            <Box>
              <Title order={5} className="px-3 py-3 text-lg font-semibold">
                {project.title}
              </Title>
              <Text>{project.description}</Text>
              {/* Tags */}
              <div className="px-3 mt-4 flex flex-wrap gap-2 ">
                {project.tags?.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </Box>
            <Image src={project.img} alt={project.title} h={250} w={250} />
          </Link>
        ))}

      {/* View All Button */}

      <Anchor component={Link} to="/projects">
        <Button>
          View All Projects <FiArrowUpRight className="inline-block ml-2" />
        </Button>
      </Anchor>
    </>
  );
}
