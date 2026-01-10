import { useParams, Link } from "@tanstack/react-router";
import { PROJECTS } from "../data/projects";
import { FaArrowLeft } from "react-icons/fa";
import { Badge, Image, Flex, Text, Title, Container } from "@mantine/core";
import Footer from "../components/Layout/Footer";
export default function Project() {
  const { id } = useParams({ strict: false });
  const project = PROJECTS.find((p) => p.id === Number(id));

  return (
    <Container m="md" p="lg">
      <Link
        to="/projects"
        className="inline-block border-primary-600 text-secondary-300 rounded-lg font-medium hover:text-primary-600 cursor-pointer"
      >
        <FaArrowLeft className="inline-block mr-2" />
        Projects
      </Link>
      {!project ? (
        <Text>Project not found</Text>
      ) : (
        <>
          <Title order={5}>{project.title}</Title>
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
              <Badge color="red" key={tag}>
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
    </Container>
  );
}
