import Sidebar from "../components/Layout/SideBar";
import Content from "../components/Layout/Content";
import { AppShell, Grid } from "@mantine/core";

export default function Home() {
  return (
    <AppShell
      bg="main.7"
      style={{ overflowX: "hidden", overflowY: "auto", height: "100vh" }}
    >
      <Grid>
        {/* Sidebar: 40% */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Sidebar />
        </Grid.Col>

        {/* Content: 60% */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Content />
        </Grid.Col>
      </Grid>
    </AppShell>
  );
}
