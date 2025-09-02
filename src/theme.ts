import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /** Define your brand colors */
  colors: {
    main: [
      "#ff007f", // 0 - brightest / primary pink
      "#ff3399", // 1
      "#ff66b2", // 2
      "#ff99cc", // 3
      "#ffb3d9", // 4
      "#ffccf0", // 5
      "#ffd9f4", // 6
      "#ffe6fa", // 7
      "#fff0fc", // 8
      "#fff7fe", // 9
    ],
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
  /** Set your primary color */
  primaryColor: "main",
  components: {
    AppShell: {
      defaultProps: {
        padding: "md",
        styles: (theme) => ({
          main: {
            backgroundColor: "#212121", // your default background
          },
        }),
      },
    },
  }, // default theme (can be 'dark')
});
