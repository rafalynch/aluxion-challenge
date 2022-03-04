import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import {
  StyledProduct,
  DescriptionContainer,
  ProductImageContainer,
} from "./styles/Product.styled";
import { CollectionImage } from "./styles/SideMenu.styled";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function Section({ product, setProgress, setActive }) {
  let section = useRef(null);
  let productRef = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    gsap.to(productRef, {
      opacity: 0,
      ease: "easeIn",
      translateY: "-500px",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        markers: false,
        scrub: 0,
        snap: {
          snapTo: 1,
          duration: 1,
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

    gsap.from(productRef, {
      opacity: 0,
      ease: "easeIn",
      translateY: "500px",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom bottom",
        markers: false,
        scrub: 0,
        snap: {
          snapTo: 1,
          duration: 1,
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

    gsap.to(info, {
      opacity: 0,
      ease: "power4.In",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        markers: false,
        scrub: 0,
        snap: {
          snapTo: 1,
          duration: 2,
          inertia: true,
          delay: 0,
        },
      },
    });

    gsap.from(info, {
      opacity: 0,
      ease: "power4.Out",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom bottom",
        markers: false,
        scrub: 0,
        snap: {
          snapTo: 1,
          duration: 2,
          inertia: true,
          delay: 0,
        },
      },
    });
  }, []);

  return (
    <StyledProduct ref={(el) => (section = el)}>
      <ProductImageContainer ref={(el) => (productRef = el)}>
        <CollectionImage src={product.image}></CollectionImage>
      </ProductImageContainer>
      <DescriptionContainer ref={(el) => (info = el)}>
        <h3>{product.creator}</h3>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </DescriptionContainer>
    </StyledProduct>
  );
}
