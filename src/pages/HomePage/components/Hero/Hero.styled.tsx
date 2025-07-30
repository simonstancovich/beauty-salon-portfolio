import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  height: 80vh;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-height: 400px;
    height: 100%;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  height: 100%;
`;
