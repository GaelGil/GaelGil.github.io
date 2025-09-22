import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Sidebar from "../components/Layout/SideBar";
import Content from "../components/Layout/Content";
const RootLayout = () => (
  <>
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside className="md:w-2/5 lg:w-1/3 lg:sticky lg:top-0 lg:h-screen flex justify-center items-start px-6 py-12">
        <Sidebar />
      </aside>

      <main className="md:w-3/5 lg:w-2/3 px-8 py-12">
        <Content />
      </main>
    </div>
    <hr />
    <Outlet />
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });
