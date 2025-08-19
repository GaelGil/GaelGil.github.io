import Sidebar from "../components/Layout/SideBar";
import Content from "../components/Layout/Content";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {" "}
      <Sidebar />
      <Content />
    </div>
  );
}
