import React, { useState } from "react";
import { StyledHeader, Logo } from "./styles/Header.styled";
import BurgerMenuButton from "./BurgerMenuButton";
import SideMenu from "./SideMenu";

export default function Header({ setDarkMode, darkMode }) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <StyledHeader>
      <Logo onClick={() => setDarkMode(!darkMode)} isActive={isActive}>
        mater
      </Logo>
      <BurgerMenuButton
        onClick={handleClick}
        isActive={isActive}
      ></BurgerMenuButton>
      <SideMenu isActive={isActive}></SideMenu>
    </StyledHeader>
  );
}
