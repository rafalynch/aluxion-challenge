import React from "react";
import { StyledHome } from "../components/styles/Home.styled";
import Header from "../components/Header";
import Body from "../components/Body";

export default function Home({ setDarkMode, darkMode }) {
  return (
    <StyledHome>
      <Header setDarkMode={setDarkMode} darkMode={darkMode}></Header>
      <Body></Body>
    </StyledHome>
  );
}
