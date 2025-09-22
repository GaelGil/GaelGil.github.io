import { createFileRoute } from "@tanstack/react-router";
import Content from "../components/Layout/Content";

export const Route = createFileRoute("/")({
  component: Content,
});
