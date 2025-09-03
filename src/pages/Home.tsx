import Sidebar from "../components/Layout/SideBar";
import Content from "../components/Layout/Content";
import { AppShell, Grid } from "@mantine/core";

export default function Home() {
  return (
    <AppShell padding={0} mih="100vh" style={{ overflow: "hidden" }}>
      <Grid style={{ height: "100%" }}>
        {/* Sidebar */}
        <Grid.Col
          span={{ base: 12, md: 4 }}
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <Sidebar />
        </Grid.Col>

        {/* Content */}
        <Grid.Col
          span={{ base: 12, md: 8 }}
          style={{
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <Content />
        </Grid.Col>
      </Grid>

      {/* Mobile responsiveness via CSS media query */}
      <style>
        {`
          @media (max-width: 768px) {
            .mantine-Grid-col:nth-child(1) {
              position: relative !important;
              height: auto !important;
            }
          }
        `}
      </style>
    </AppShell>
  );
}
