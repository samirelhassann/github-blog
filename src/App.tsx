import React from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { ThemeProvider } from "styled-components";

import { GithubProvider } from "./contexts/GithubContext";
import Router from "./pages/Router";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <GithubProvider>
          <Router />
        </GithubProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
