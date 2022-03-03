import styled from "styled-components";

export const StyledMenuLink = styled.div`
  display: inline;
  text-align: left;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 30px;
  cursor: pointer;
  z-index: 5;
  margin: 0 0 10px 0;

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 5px 0 5px 0;
  }
`;

export const LinksContainer = styled.div`
  visibility: hidden;
  display: flex;
  flex-direction: column;
  align-content: center;
  gap: 8px;
  height: 0;
  opacity: 0;
  color: ${({ theme }) => theme.colors.primary};
`;
