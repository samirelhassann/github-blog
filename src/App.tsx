import React from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

import { GithubProvider } from "./contexts/GithubContext";
import Router from "./pages/Router";

function App() {
  const base = import.meta.env.VITE_BASE || "/";

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter basename={base}>
        <GithubProvider>
          <Router />
        </GithubProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
