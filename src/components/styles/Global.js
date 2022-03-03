import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary};
    font-family: "lato", sans-serif;
  }

`;
export default GlobalStyles;
