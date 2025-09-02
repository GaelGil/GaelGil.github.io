import { PROJECTS } from "../../data/projects";
import { useNavigate } from "react-router-dom";
import { Title, Text, Image } from "@mantine/core";
export default function Projects() {
  const navigate = useNavigate();
  return (
    <>
      {[...PROJECTS]
        .reverse()
        .slice(0, 4)
        .map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/projects/${p.id}`)}
            className="rounded-md transition border-2 border-transparent hover:border-secondary-300 cursor-pointer flex"
          >
            <div className="flex-1">
              <Title order={3} fw={600} p={3}>
                {p.title}
              </Title>
              <Text px={3}>{p.description}</Text>
              {/* Tags */}
              <div className="px-3 mt-4 flex flex-wrap gap-2 ">
                {p.tags?.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs rounded-md border text-secondary-300 border-secondary-300 "
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <Image w={200} h={200} src={p.img} alt={p.title} />
          </div>
        ))}

      {/* View All Button */}
      <div className="mt-12">
        <button
          className="inline-block px-6 py-3 border
            border-secondary-300
            text-secondary-300 rounded-lg font-medium hover:text-primary-600 hover:border-primary-600 cursor-pointer"
          onClick={() => navigate("/projects")}
        >
          View All Projects
        </button>
      </div>
    </>
  );
}
