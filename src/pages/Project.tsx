import { useParams, Link } from "@tanstack/react-router";
import { PROJECTS } from "../data/projects";
import { FaArrowLeft } from "react-icons/fa";
import { Badge, Image, Flex, Text } from "@mantine/core";
import Footer from "../components/Layout/Footer";
export default function Project() {
  const { id } = useParams({ strict: false });
  const project = PROJECTS.find((p) => p.id === Number(id));

  return (
    <div className="max-w-2xl mx-auto p-8 px-2">
      <Link
        to="/projects"
        className="inline-block border-primary-600 text-secondary-300 rounded-lg font-medium hover:text-primary-600 cursor-pointer"
      >
        <FaArrowLeft className="inline-block mr-2" />
        Projects
      </Link>
      {!project ? (
        <div>Project not found</div>
      ) : (
        <>
          <h5 className="text-xl font-bold">{project.title}</h5>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <div className="flex items-center">
              <Image
                src={project.img}
                alt={project.title}
                className="mt-4 h-100 w-100 rounded-sm align-middle"
              />
            </div>
          </div>
          <Flex>
            {project.tags?.map((tag) => (
              <Badge
                color="red"
                key={tag}
                // className="px-6 text-xs rounded-md text-secondary-300 bg-tertiary-300"
              >
                {tag}
              </Badge>
            ))}
          </Flex>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              className="text-xl leading-relaxed text-secondary-300"
            >
              Project
            </a>
          ) : (
            <>
              <h1></h1>
            </>
          )}
          <br />
          <a
            href={project.repo}
            target="_blank"
            className="text-xl leading-relaxed text-secondary-300"
          >
            Repo
          </a>
          <Text>{project.content}</Text>
        </>
      )}
      <Footer />
    </div>
  );
}
