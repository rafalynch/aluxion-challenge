import styled from "styled-components";

export const StyledBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  width: 100vw;
  position: fixed;
  z-index: 2;
  bottom: 0;
  border-top: solid 1px lightgray;
  padding-bottom: 20px;
  padding-left: ${({ theme }) => theme.bodyMargin.default};
  padding-right: ${({ theme }) => theme.bodyMargin.default};
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 480px) {
    padding-left: ${({ theme }) => theme.bodyMargin.mobile};
    padding-right: ${({ theme }) => theme.bodyMargin.mobile};
  }
`;

export const Button = styled.button`
  z-index: 2;
  width: 180px;
  position: fixed;
  top: 50%;
  left: ${({ theme }) => theme.bodyMargin.default};
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  height: 45px;
  padding: 15px;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    color: lightgray;
  }

  @media (max-width: 480px) {
    top: 48%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;
