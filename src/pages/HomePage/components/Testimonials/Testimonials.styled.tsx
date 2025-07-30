import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
`;
const fadeOut = keyframes`
  from { opacity: 1; transform: translateX(0); }
  to   { opacity: 0; transform: translateX(-20px); }
`;

export const Section = styled.section`
  width: 100%;
  padding: 20px 0 50px 0;
  text-align: center;

  background: linear-gradient(
    to bottom,
    rgba(212, 162, 156, 0.484) 0%,
    rgba(212, 162, 156, 0.484) 60%,
    ${({ theme }) => theme.colors.ivory} 40%,
    ${({ theme }) => theme.colors.ivory} 100%
  );
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.charcoal}80;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 150px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 125px;
  }
`;

export const Slide = styled.div<{ active: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.ivory};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  display: flex;
  align-items: center;
  gap: 2rem;

  opacity: ${({ active }) => (active ? 1 : 0)};
  animation: ${({ active }) => (active ? fadeIn : fadeOut)} 0.6s ease-in-out
    both;
`;

export const Content = styled.div`
  text-align: left;
  flex: 1;
`;

export const Name = styled.h3`
  margin: 0;
`;

export const Quote = styled.p`
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.charcoal};
  line-height: 1.5;
`;
