import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { testimonials } from "../../../../data/testimonials";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(20px); }
  to   { opacity: 1; transform: translateX(0); }
`;
const fadeOut = keyframes`
  from { opacity: 1; transform: translateX(0); }
  to   { opacity: 0; transform: translateX(-20px); }
`;

const Section = styled.section`
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

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.charcoal}80;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  height: 150px;
`;

const Slide = styled.div<{ active: boolean }>`
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

const Content = styled.div`
  text-align: left;
  flex: 1;
`;

const Name = styled.h3`
  margin: 0;
`;

const Quote = styled.p`
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.charcoal};
  line-height: 1.5;
`;

export const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section>
      <Title>Testimonials</Title>
      <Subtitle>
        Hear directly from clients who’ve experienced the Éclat Atelier
        difference.
      </Subtitle>
      <Slider>
        {testimonials.map((t, i) => (
          <Slide key={i} active={i === index}>
            <Content>
              <Name>{t.name}</Name>
              <Quote>{t.quote}</Quote>
            </Content>
          </Slide>
        ))}
      </Slider>
    </Section>
  );
};

export default Testimonials;
