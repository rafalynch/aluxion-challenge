import styled from "styled-components";

export const StyledSideMenu = styled.div`
  padding-top: 150px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.secondary};
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  padding-left: 40px;
  padding-right: 40px;
  z-index: 2;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
`;

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 20px;
`;

export const CollectionImage = styled.img`
  justify-self: center;
  align-self: center;
  object-fit: cover;
  width: 150px;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const SmallLink = styled.p`
  cursor: pointer;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary};
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
  &:hover {
    opacity: 1;
  }
`;

export const MenuFooter = styled.div`
  display: grid;
  position: absolute;
  bottom: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 15px;
`;
