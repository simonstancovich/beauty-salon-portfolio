import React from "react";
import { FlexContainer } from "../FlexContainer";
import styled, { css } from "styled-components";

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  image?: string;
  alt?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  href?: string;
}

const CardContainer = styled(FlexContainer)<{
  backgroundUrl?: string;
  href?: string;
}>`
  position: relative;
  overflow: hidden;
  background-image: ${({ backgroundUrl }) =>
    backgroundUrl ? `url(${backgroundUrl})` : "none"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-decoration: none;
  color: inherit;

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.154) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${({ href }) =>
    href &&
    css`
      cursor: pointer;

      &:hover {
        transform: translateY(-6px) scale(1.02);
      }

      &:hover::before {
        opacity: 1;
      }
    `}
`;

export const Card: React.FC<CardProps> = ({
  width = "100%",
  height,
  children,
  image,
  alt,
  flexDirection = "row",
  justifyContent = "space-between",
  alignItems = "center",
  href,
}) => {
  const content = (
    <CardContainer
      width={width}
      height={height}
      backgroundUrl={image}
      href={href}
      aria-label={image ? alt : undefined}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      as={href ? "a" : "div"}
    >
      {children}
    </CardContainer>
  );

  return content;
};

export default Card;
