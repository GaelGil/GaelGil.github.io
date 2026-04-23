import { createTheme } from "@mantine/core";
import type { CSSVariablesResolver } from "@mantine/core";

export const theme = createTheme({
  colors: {
    brand: [
      "oklch(58.6% 0.253 17.585)", // shade 0
      "oklch(58.6% 0.253 17.585)", // shade 1
      "oklch(58.6% 0.253 17.585)", // shade 2
      "oklch(58.6% 0.253 17.585)", // shade 3
      "oklch(58.6% 0.253 17.585)", // shade 4
      "oklch(58.6% 0.253 17.585)", // shade 5
      "oklch(58.6% 0.253 17.585)", // shade 6
      "oklch(58.6% 0.253 17.585)", // shade 7
      "oklch(58.6% 0.253 17.585)", // shade 8
      "oklch(58.6% 0.253 17.585)", // shade 9
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
