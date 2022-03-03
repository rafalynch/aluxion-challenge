import React from "react";
import { StyledHome } from "../components/styles/Home.styled";
import Header from "../components/Header";
import Body from "../components/Body";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <StyledHome>
      <Header></Header>
      <Body></Body>
      <Navbar></Navbar>
    </StyledHome>
  );
}
