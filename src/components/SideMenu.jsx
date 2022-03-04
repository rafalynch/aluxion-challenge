import React, { useEffect, useRef, useState } from "react";
import {
  StyledSideMenu,
  SmallLink,
  Container,
  CollectionImage,
  Grid,
  MenuFooter,
} from "./styles/SideMenu.styled";
import { gsap } from "gsap";
import MenuLink from "./MenuLink";
import furnitureImage from "../assets/images/sofa-blanco.png";

export default function({ isActive }) {
  let menuTl = useRef(gsap.timeline({ paused: true, reversed: false }));
  let contentInTl = useRef(gsap.timeline({ paused: true, reversed: false }));
  let contentOutTl = useRef(gsap.timeline({ paused: true, reversed: false }));
  let itemImageTl = useRef(gsap.timeline({ paused: true, reversed: false }));
  let container = useRef(null);
  let content = useRef(null);
  let menuFooter = useRef(null);
  let itemImage = useRef(null);

  const [selectedCollection, setSelectedCollection] = useState();

  const collections = [
    {
      id: 1,
      name: "Furniture",
      image: furnitureImage,
    },
    {
      id: 2,
      name: "Lighting",
      image: "",
    },
    {
      id: 3,
      name: "Accesories",
      image: "",
    },
  ];

  useEffect(() => {
    menuTl.current.from(container, {
      translateX: "100%",
    });

    contentInTl.current.from([content, menuFooter], {
      translateY: "25px",
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
    });

    contentOutTl.current.from([content, menuFooter], {
      opacity: 1,
      duration: 0.5,
    });

    itemImageTl.current.from(itemImage, {
      duration: 1,
      translateY: "50px",
      opacity: 0,
    });
  }, []);

  useEffect(() => {
    itemImageTl.current.restart();
  }, [selectedCollection]);

  useEffect(() => {
    if (isActive) {
      menuTl.current.play();
      contentInTl.current.restart();
      setSelectedCollection(undefined);
    } else {
      menuTl.current.reverse();
      contentOutTl.current.restart();
      setSelectedCollection(undefined);
    }
  }, [isActive]);

  return (
    <StyledSideMenu ref={(el) => (container = el)}>
      <Grid>
        <Container ref={(el) => (content = el)}>
          <MenuLink
            isSelected={selectedCollection}
            setSelectedCollection={setSelectedCollection}
            isActive={isActive}
            title={"Collection"}
          >
            {collections.map((item) => {
              return (
                <SmallLink
                  key={item.id}
                  onClick={() => setSelectedCollection(item)}
                  isSelected={item.id === selectedCollection?.id}
                >
                  {item.name}
                </SmallLink>
              );
            })}
          </MenuLink>
          <MenuLink title={"Desgin"}></MenuLink>
          <MenuLink title={"Craftmanship"}></MenuLink>
          <MenuLink title={"Ethics"}></MenuLink>
        </Container>
        <CollectionImage
          ref={(el) => (itemImage = el)}
          src={selectedCollection?.image}
        ></CollectionImage>
      </Grid>
      <MenuFooter ref={(el) => (menuFooter = el)}>
        <SmallLink>About</SmallLink>
        <SmallLink>Contact</SmallLink>
        <SmallLink>Dealers</SmallLink>
        <SmallLink>News</SmallLink>
        <SmallLink>Care</SmallLink>
        <SmallLink>Press</SmallLink>
      </MenuFooter>
    </StyledSideMenu>
  );
}
