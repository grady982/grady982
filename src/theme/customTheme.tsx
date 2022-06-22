import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    cswhite?: PaletteOptions["primary"];
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

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    neutral: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    cswhite: true;
  }
}

const darkTheme = createTheme({
  palette: {
    neutral: {
      main: "rgba(0, 0, 0, 0.5)",
      contrastText: "#fff",
    },
    cswhite: {
      main: "rgba(255, 255, 255, 0.8)",
      contrastText: "#fff",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    neutral: {
      main: "rgba(255, 255, 255, 0.5)",
      contrastText: "#000000",
    },
    cswhite: {
      main: "rgba(0, 0, 0, 0.8)",
      contrastText: "#fff",
    },
  },
});

export { darkTheme, lightTheme };
