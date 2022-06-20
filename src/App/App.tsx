import React from "react";
import "./App.css";
import ResponsiveAppBar from "../components/ResponsiveAppBar/ResponsiveAppBar";
import AppContent from "./AppContent/AppContent";
import NoSsr from "@mui/material/NoSsr";
import { ThemeContextProvider } from "../context/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <NoSsr defer={true}>
        <div className="App App-bg">
          <header>
            <ResponsiveAppBar />
          </header>
          <AppContent />
        </div>
      </NoSsr>
    </ThemeContextProvider>
  );
}

export default App;
