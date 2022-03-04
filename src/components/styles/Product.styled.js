import styled from "styled-components";

export const StyledProduct = styled.div`
  position: relative;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding-left: ${({ theme }) => theme.bodyMargin.default};
  padding-right: ${({ theme }) => theme.bodyMargin.default};

  @media (max-width: 480px) {
    padding-left: ${({ theme }) => theme.bodyMargin.mobile};
    padding-right: ${({ theme }) => theme.bodyMargin.mobile};
    flex-direction: column;
    gap: 90px;
  }
`;

export const ProductImageContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: end;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const DescriptionContainer = styled.div`
  left: ${({ theme }) => theme.bodyMargin.default};
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
    margin-top: 20px;
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
