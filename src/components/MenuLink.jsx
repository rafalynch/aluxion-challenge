import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import {
  StyledMenuLink,
  Title,
  LinksContainer,
} from "./styles/MenuLink.styled";

export default function({ title, children, isActive }) {
  let linkTl = useRef(gsap.timeline({ paused: true, reversed: false }));
  let links = useRef(null);

  const [isOpened, toggleOpen] = useState(false);

  function openLink(val) {
    toggleOpen(val);
  }

  useEffect(() => {
    linkTl.current.from(
      links,
      {
        duration: 0.4,
        translateX: "100%",
        ease: "circ.InOut",
      },
      0
    );

    linkTl.current.to(
      links,
      {
        duration: 0.4,
        height: "auto",
        ease: "circ.InOut",
      },
      0
    );

    linkTl.current.to(links, {
      visibility: "initial",
      duration: 0.2,
      opacity: 1,
      ease: "circ.InOut",
    });
  }, []);

  useEffect(() => {
    if (isOpened) {
      linkTl.current.play();
    } else {
      linkTl.current.reverse();
    }
  }, [isOpened]);

  useEffect(() => {
    if (!isActive && !linkTl.current.reversed()) {
      linkTl.current.reverse();
      openLink(false);
    }
  }, [isActive]);

  return (
    <StyledMenuLink
      onMouseEnter={() => openLink(true)}
      onMouseLeave={() => openLink(false)}
    >
      <Title>{title}</Title>
      <LinksContainer ref={(e) => (links = e)}>{children}</LinksContainer>
    </StyledMenuLink>
  );
}
