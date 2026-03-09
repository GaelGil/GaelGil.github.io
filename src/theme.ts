import { createTheme } from "@mantine/core";
import type { CSSVariablesResolver } from "@mantine/core";

export const theme = createTheme({
  colors: {
    brand: [
      "#ffffff", // shade 0
      "#212121", // shade 1
      "#303030", // shade 2
      "#414141", // shade 3
      "#0d0d0d80", // shade 4
      "#303030", // shade 5
      "#181818", // shade 6
      "#000000", // shade 7
      "#afafaf", // shade 8
      "#000d33", // shade 9
    ],
    red: [
      "#ff0033ff",
      "#ff0033ff",
      "#ff0033ff",
      "#ff2f59ff",
      "#ff0033ff",
      "#ff0033ff",
      "#ff0033ff",
      "#ff0033ff",
      "#ff0033ff",
      "#ff0033ff",
    ],
    dark: [
      "#ffffffff", // shade 0
      "#000000ff", // shade 1
      "#000000ff", // shade 2
      "#f6f6f6ff", // shade 3
      "#000000ff", // shade 4
      "#000000ff", // shade 5
      "#000000ff", // shade 6
      "#000000ff", // shade 7
      "#000000ff", // shade 8
      "#000000ff", // shade 9
    ],
  },

  primaryColor: "red",

  components: {}, // default theme (can be 'dark')
});

export const cssResolver: CSSVariablesResolver = () => ({
  variables: {
    "--mantine-color-body": "#0a0a0a",
  },
  light: {
    "--mantine-color-body": "#0a0a0a",
  },
  dark: {
    "--mantine-color-body": "#0a0a0a",
  },
});
