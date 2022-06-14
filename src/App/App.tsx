import React from "react";
import "./App.css";
import ResponsiveAppBar from "../Component/ResponsiveAppBar/ResponsiveAppBar";
import AppContent from "./AppContent/AppContent";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/customTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App App-bg">
        <header>
          <ResponsiveAppBar />
        </header>
        <AppContent />
      </div>
    </ThemeProvider>
  );
}

export default App;
