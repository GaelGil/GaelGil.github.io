import { createFileRoute } from "@tanstack/react-router";
import Project from "../../pages/Project";
export const Route = createFileRoute("/projects/$id")({
  component: Project,
});
