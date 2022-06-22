import React, { useState, createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../theme/customTheme";
import { ThemeMode } from "../common/enum";

const ThemeContext = createContext({
  theme: ThemeMode.Dark,
  toggleTheme: () => {},
});

const ThemeContextProvider = (props: any) => {
  const [currentTheme, setCurrentTheme] = useState(ThemeMode.Dark);

  const state = {
    theme: currentTheme,
    toggleTheme: () => {
      setCurrentTheme(
        currentTheme === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark
      );
    },
  };

  return (
    <ThemeContext.Provider value={state}>
      <ThemeProvider
        theme={currentTheme === ThemeMode.Dark ? darkTheme : lightTheme}
      >
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
