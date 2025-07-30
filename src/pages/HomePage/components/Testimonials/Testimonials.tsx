import React, { useState, useEffect } from "react";
import { testimonials } from "../../../../data/testimonials";
import {
  Content,
  Name,
  Quote,
  Section,
  Slide,
  Slider,
  Subtitle,
  Title,
} from "./Testimonials.styled";

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
