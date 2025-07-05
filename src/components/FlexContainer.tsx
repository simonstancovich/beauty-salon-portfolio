import styled from "styled-components";

interface FlexProps {
  width?: string;
  height?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  gap?: string;
  backgroundColor?: string;
  padding?: string;
}

export const FlexContainer = styled.div<FlexProps>`
  display: flex;
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height, width }) => height ?? (width ? width : "auto")};
  flex-direction: ${({ flexDirection }) => flexDirection ?? "column"};
  align-items: ${({ alignItems }) => alignItems ?? "center"};
  justify-content: ${({ justifyContent }) => justifyContent ?? "space-between"};
  gap: ${({ gap }) => gap ?? "0.5rem"};
  max-width: 100%;
  margin: ${({ margin }) => margin ?? "0"};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ?? "transparent"};
  padding: ${({ padding }) => padding ?? "0"};
`;
