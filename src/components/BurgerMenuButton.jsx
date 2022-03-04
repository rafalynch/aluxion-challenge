import React, { useEffect, useRef } from "react";
import { withTheme } from "styled-components";
import {
  StyledBurgerMenuButton,
  LineOne,
  LineTwo,
  LineThree,
} from "./styles/BurgerMenuButton.styled";
import { gsap } from "gsap";

export default withTheme(function({ isActive, onClick, theme }) {
  let buttonTl = useRef(gsap.timeline({ paused: true, reversed: false }));
  let container = useRef(null);
  let lineOne = useRef(null);
  let lineTwo = useRef(null);
  let lineThree = useRef(null);

  useEffect(() => {
    buttonTl.current.to(container, {
      backgroundColor: theme.colors.secondary,
      borderColor: theme.colors.primary,
      duration: 0.1,
      ease: "power2.inOut",
    });

    buttonTl.current.to(
      lineOne,
      {
        duration: 0.5,
        backgroundColor: theme.colors.primary,
        rotation: -45,
        translateY: 9,
        ease: "power2.inOut",
      },
      0
    );

    buttonTl.current.to(
      lineTwo,
      {
        duration: 0.5,
        backgroundColor: theme.colors.primary,
        delay: 0,
        rotation: 45,
        translateY: -5,
        ease: "power2.inOut",
      },
      0
    );

    buttonTl.current.to(
      lineThree,
      {
        duration: 0.5,
        backgroundColor: theme.colors.primary,
        delay: 0,
        rotation: 45,
        translateY: -7,
        translateX: -1,
        ease: "power2.inOut",
      },
      0
    );
  }, [theme.colors.primary, theme.colors.secondary]);

  useEffect(() => {
    if (isActive) {
      buttonTl.current.play();
    } else {
      buttonTl.current.reverse();
    }
  }, [isActive]);

  return (
    <StyledBurgerMenuButton onClick={onClick} ref={(el) => (container = el)}>
      <LineOne ref={(el) => (lineOne = el)}></LineOne>
      <LineTwo ref={(el) => (lineTwo = el)}></LineTwo>
      <LineThree ref={(el) => (lineThree = el)}></LineThree>
    </StyledBurgerMenuButton>
  );
});
