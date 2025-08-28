import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:id",
    element: <Project />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
