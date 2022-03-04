import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: ${({ theme }) => theme.bodyMargin.default};
  padding-right: ${({ theme }) => theme.bodyMargin.default};
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 5;

  @media (max-width: 480px) {
    padding-right: ${({ theme }) => theme.bodyMargin.mobile};
  }
`;

export const Logo = styled.h1`
  font-weight: 900;
  font-size: 20px;
  z-index: 100;
  transition: all 1s;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.secondary};
`;
