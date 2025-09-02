import { PROJECTS } from "../../data/projects";
import { useNavigate } from "react-router-dom";
import { Title, Text, Image, Button, Badge } from "@mantine/core";
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
              <Title c={"main.0"} order={3} fw={600} p={3}>
                {p.title}
              </Title>
              <Text c={"main.0"} px={3}>
                {p.description}
              </Text>
              {/* Tags */}
              <div className="px-3 mt-4 flex flex-wrap gap-2 ">
                {p.tags?.map((t) => (
                  <Badge
                    key={t}
                    bd={"1px solid main.0"}
                    bg={"main.7"}
                    c={"main.0"}
                    variant="outline"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            <Image w={200} h={200} src={p.img} alt={p.title} />
          </div>
        ))}

      {/* View All Button */}
      <div className="mt-12">
        <Button
          variant="outline"
          radius="xl"
          size="lg"
          bg={"main.7"}
          bd="2px solid main.0"
          c={"main.0"}
          onClick={() => navigate("/projects")}
        >
          View All Projects
        </Button>
      </div>
    </>
  );
}
