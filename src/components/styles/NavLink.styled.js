import styled from "styled-components";

export const StyledNavLink = styled.a`
  cursor: pointer;
  width: 180px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 480px) {
    width: 90px;
  }
`;

export const ProgressBar = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Container = styled.div`
  font-size: 12px;
  opacity: ${({ active, productId }) => {
    return active === productId ? 1 : 0.5;
  }};

  p {
    opacity: 0.5;
  }
`;
