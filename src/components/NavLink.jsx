import React from "react";
import { StyledNavLink, ProgressBar, Container } from "./styles/NavLink.styled";

export default function({ product, active, handleClick, progress }) {
  return (
    <StyledNavLink key={product.id}>
      <ProgressBar
        style={{
          width: product.id == active ? progress * 100 + "%" : "0%",
        }}
      ></ProgressBar>
      <Container
        active={active}
        productId={product.id}
        onClick={() => handleClick(product.id)}
      >
        <p>{product.listNumber}</p>
        {product.name}
      </Container>
    </StyledNavLink>
  );
}
