import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import GlobalStyles from "./components/styles/Global";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyles />
      <Home></Home>
    </ThemeProvider>
  );
}

export default App;
