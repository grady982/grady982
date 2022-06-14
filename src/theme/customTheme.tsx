import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/AppBar" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}

const theme = createTheme({
  palette: {
    neutral: {
      // main: "rgba(0, 35, 31, 0.3)",
      main: "rgba(0, 0, 0, 0.5)",
      contrastText: "#fff",
    },
  },
});

export { theme };
