import styled from "styled-components";

export const StyledBurgerMenuButton = styled.div`
  height: 50px;
  width: 50px;
  border: solid 1px ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  display: grid;
  justify-content: center;
  align-items: center;
  align-content: space-around;
  padding: 8px;
  cursor: pointer;
  z-index: 5;
`;

export const LineOne = styled.div`
  height: 2px;
  background-color: black;
  width: 20px;
`;

export const LineTwo = styled.div`
  height: 2px;
  background-color: black;
  width: 12px;
`;

export const LineThree = styled.div`
  height: 2px;
  background-color: black;
  width: 8px;
  justify-self: right;
`;
