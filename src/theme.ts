import { createTheme } from "@mantine/core";
import type { CSSVariablesResolver } from "@mantine/core";

export const theme = createTheme({
  colors: {
    brand: [
      "oklch(79.2% 0.209 151.711)", // shade 0
      "oklch(79.2% 0.209 151.711)", // shade 1
      "oklch(79.2% 0.209 151.711)", // shade 2
      "oklch(79.2% 0.209 151.711)", // shade 3
      "oklch(79.2% 0.209 151.711)", // shade 4
      "oklch(72.3% 0.219 149.579)", // shade 5
      "oklch(62.7% 0.194 149.214)", // shade 6
      "oklch(53.2% 0.157 131.589)", // shade 7
      "oklch(79.2% 0.209 151.711)", // shade 8
      "oklch(79.2% 0.209 151.711)", // shade 9
    ],
  },

  primaryColor: "brand",

  components: {}, // default theme (can be 'dark')
});

export const cssResolver: CSSVariablesResolver = () => ({
  variables: {
    "--mantine-color-body": "red",
    "--mantine-color-text": "white",
  },
  light: {
    "--mantine-color-body": "red",
    "--mantine-color-text": "white",
  },
  dark: {
    "--mantine-color-body": "oklch(12.9% 0.042 264.695)",
    "--mantine-color-text": "white",
  },
});
