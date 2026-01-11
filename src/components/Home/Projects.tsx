import { Title, Text, Badge } from "@mantine/core";
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
            <div className="flex-1">
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
            </div>
            <img
              src={project.img}
              alt={project.title}
              className="object-fit rounded-sm md:w-50 md:h-50 w-25 h-25 "
            />
          </Link>
        ))}

      {/* View All Button */}
      <div className="mt-12">
        <Link
          to="/projects"
          className="inline-block px-6 py-3 rounded-lg font-medium hover:text-secondary-300 cursor-pointer"
        >
          View All Projects <FiArrowUpRight className="inline-block ml-2" />
        </Link>
      </div>
    </>
  );
}
