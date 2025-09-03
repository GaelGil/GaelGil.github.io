import { PROJECTS } from "../../data/projects";
import { useNavigate } from "react-router-dom";
import {
  Title,
  Text,
  Image,
  Button,
  Badge,
  Group,
  Box,
  Container,
} from "@mantine/core";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <>
      {[...PROJECTS]
        .reverse()
        .slice(0, 4)
        .map((p) => (
          <Group
            key={p.id}
            align="flex-start"
            onClick={() => navigate(`/projects/${p.id}`)}
            wrap="nowrap"
            style={{ cursor: "pointer" }}
          >
            {/* Left side: text content */}
            <Box style={{ flex: 1 }}>
              <Title
                c={"var(--mantine-color-text-primary)"}
                order={3}
                fw={600}
                mb="xs"
              >
                {p.title}
              </Title>
              <Text c={"var(--mantine-color-text-primary)"} mb="sm">
                {p.description}
              </Text>

              {/* Tags */}
              <Group mt="sm" wrap="wrap">
                {p.tags?.map((t) => (
                  <Badge
                    key={t}
                    variant="light"
                    color={"var(--mantine-color-text-primary)"}
                  >
                    {t}
                  </Badge>
                ))}
              </Group>
            </Box>

            {/* Right side: image */}
            <Image
              src={p.img}
              alt={p.title}
              w={200}
              h={200}
              radius="md"
              fit="cover"
            />
          </Group>
        ))}

      {/* View All Button */}
      <Container mt="xl">
        <Button
          radius="xl"
          size="lg"
          onClick={() => navigate("/projects")}
          variant="light"
          color={"var(--mantine-color-text-primary)"}
        >
          View All Projects
        </Button>
      </Container>
    </>
  );
}
