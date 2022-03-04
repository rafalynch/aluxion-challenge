import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import GlobalStyles from "./components/styles/Global";
import theme from "./theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? theme.dark : theme.light}>
      <GlobalStyles />
      <Home setDarkMode={setDarkMode} darkMode={darkMode}></Home>
    </ThemeProvider>
  );
}

export default App;
