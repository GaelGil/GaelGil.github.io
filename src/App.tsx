import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Router } from "./Router";
import { theme, cssResolver } from "./theme";
import { AppShell } from "@mantine/core";
export default function App() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssResolver}>
      <AppShell
        padding="xl"
        mih={"100vh"}
        bg={"var(--mantine-color-background)"}
      >
        <Router />
      </AppShell>
    </MantineProvider>
  );
}
