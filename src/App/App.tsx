import React, { useState } from "react";
import "./App.css";
import ResponsiveAppBar from "../components/ResponsiveAppBar/ResponsiveAppBar";
import AppContent from "./AppContent/AppContent";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../theme/customTheme";
import NoSsr from "@mui/material/NoSsr";
import { ThemeMode } from "../common/enum";

function App() {
  const [currentTheme, setCurrentTeme] = useState(ThemeMode.Dark);

  return (
    <ThemeProvider
      theme={currentTheme === ThemeMode.Dark ? darkTheme : lightTheme}
    >
      <NoSsr defer={true}>
        <div className="App App-bg">
          <header>
            <ResponsiveAppBar
              theme={currentTheme}
              changeTheme={setCurrentTeme}
            />
          </header>
          <AppContent theme={currentTheme} />
        </div>
      </NoSsr>
    </ThemeProvider>
  );
}

export default App;
