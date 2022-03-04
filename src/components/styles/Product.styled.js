import styled from "styled-components";

export const StyledProduct = styled.div`
  position: relative;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 90px;
  }
`;

export const DescriptionContainer = styled.div`
  left: 40px;
  top: 28%;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: absolute;
  color: ${({ theme }) => theme.colors.secondary};

  h1 {
    font-size: 24px;
    font-weight: 600;
  }

  h3 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    position: relative;
    width: 250px;
    top: auto;
    left: auto;
    h1 {
      font-size: 24px;
      font-weight: 600;
    }

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;
