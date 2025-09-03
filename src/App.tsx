import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Router } from "./Router";
import { theme } from "./theme";
import { AppShell } from "@mantine/core";
export default function App() {
  return (
    <MantineProvider theme={theme}>
      <AppShell padding="xl" mih={"100vh"} bg={"main.9"}>
        <Router />
      </AppShell>
    </MantineProvider>
  );
}
