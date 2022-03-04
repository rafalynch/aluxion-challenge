import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { StyledProduct, DescriptionContainer } from "./styles/Product.styled";
import { CollectionImage } from "./styles/SideMenu.styled";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function Section({ product, setProgress, setActive }) {
  let section = useRef(null);

  useEffect(() => {
    gsap.to(section, {
      opacity: 0,
      ease: "easeOut",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        markers: false,
        scrub: 0,
        snap: {
          snapTo: 1,
          duration: 0.6,
          inertia: true,
          delay: 0,
        },
        onUpdate: (self) => {
          if (self.progress) {
            setActive(product.id);
          }
        },
      },
    });

    gsap.from(section, {
      opacity: 0,
      ease: "power4.in",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom bottom",
        markers: false,
        scrub: 0,
        snap: {
          snapTo: 1,
          duration: 0.6,
          inertia: true,
          delay: 0,
        },
        onUpdate: (self) => {
          if (self.progress) {
            setActive(product.id);
          }
          if (self.direction === 1) {
            setProgress(self.progress);
          } else {
            setProgress(1 - self.progress);
          }
        },
      },
    });
  }, []);

  return (
    <StyledProduct ref={(el) => (section = el)}>
      <DescriptionContainer>
        <h3>{product.creator}</h3>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </DescriptionContainer>
      <CollectionImage src={product.image}></CollectionImage>
    </StyledProduct>
  );
}
