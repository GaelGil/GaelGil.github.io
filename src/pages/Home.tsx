import Sidebar from "../components/Layout/SideBar";
import Content from "../components/Layout/Content";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Content />
    </div>
  );
}
