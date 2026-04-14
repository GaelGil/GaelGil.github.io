import { createTheme } from "@mantine/core";
import type { CSSVariablesResolver } from "@mantine/core";

export const theme = createTheme({
  colors: {
    brand: [
      "#e6f5e6", // shade 0
      "#d1ebd1", // shade 1
      "#a8d9a8", // shade 2
      "#7ec77e", // shade 3
      "#5eb65e", // shade 4
      "#3da23d", // shade 5
      "#2d8a2d", // shade 6
      "#1f6b1f", // shade 7
      "#144d14", // shade 8
      "#0a320a", // shade 9
    ],
  },

  primaryColor: "brand",

  components: {}, // default theme (can be 'dark')
});

export const cssResolver: CSSVariablesResolver = () => ({
  variables: {
    "--mantine-color-body": "black",
    "--mantine-color-text": "white",
  },
  light: {
    "--mantine-color-body": "black",
    "--mantine-color-text": "white",
  },
  dark: {
    "--mantine-color-body": "black",
    "--mantine-color-text": "white",
  },
});
