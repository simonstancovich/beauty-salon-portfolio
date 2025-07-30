import styled from "styled-components";

export const HeaderSubtitleContainer = styled.div`
  text-align: center;
  padding: 2rem;
  width: 700px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 700px;
    width: 100%;
  }
`;
