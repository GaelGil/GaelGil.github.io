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
              <Title c="main.0" order={3} fw={600} mb="xs">
                {p.title}
              </Title>
              <Text c="main.8" mb="sm">
                {p.description}
              </Text>

              {/* Tags */}
              <Group mt="sm" wrap="wrap">
                {p.tags?.map((t) => (
                  <Badge key={t} variant="light" color="main.5">
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
          variant="outline"
          radius="xl"
          size="lg"
          bg="main.9"
          c="main.0"
          bd={"2px solid main.0"}
          onClick={() => navigate("/projects")}
        >
          View All Projects
        </Button>
      </Container>
    </>
  );
}
