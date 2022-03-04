import React, { useState } from "react";
import { gsap } from "gsap";
import Product from "./Product";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { Button, Nav } from "./styles/Body.styled";
import NavLink from "./NavLink";
import sillaNegra from "../assets/images/silla-negra.png";
import mesaNegra from "../assets/images/mesa-negra.png";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function() {
  const [active, setActive] = useState(1);
  const [progress, setProgress] = useState(1);

  function handleClick(id) {
    gsap.to(window, {
      scrollTo: (id - 1) * window.innerHeight,
    });
  }

  function handleClickButton() {}

  const productsArray = [
    {
      id: 1,
      listNumber: "01",
      name: "Shell Dining Chair",
      creator: "Michael W. Dreeben",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Blanditiis quibusdam nihil mollitia culpa adipisci. 
      Suscipit similique possimus obcaecati libero natus, 
      tempore nostrum nam qui eius atque itaque voluptates error harum?`,
      image: sillaNegra,
    },

    {
      id: 2,
      listNumber: "02",
      creator: "Jeaper K. Thomas",
      name: "Dunes Anthrazite Black",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Blanditiis quibusdam nihil mollitia culpa adipisci. 
      Suscipit similique possimus obcaecati libero natus, 
      tempore nostrum nam qui eius atque itaque voluptates error harum?`,
      image: mesaNegra,
    },
  ];

  return (
    <div>
      <Button onClick={handleClickButton}>Product Details</Button>
      <Nav>
        {productsArray.map((product) => {
          return (
            <NavLink
              product={product}
              handleClick={handleClick}
              active={active}
              progress={progress}
            ></NavLink>
          );
        })}
      </Nav>
      {productsArray.map((product) => {
        return (
          <Product
            product={product}
            setProgress={setProgress}
            setActive={setActive}
          ></Product>
        );
      })}
    </div>
  );
}
