// src/components/Logo.tsx
import React from "react";

export const Logo: React.FC<{ width?: number; height?: number }> = ({
  width = 200,
  height = 100,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 200 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="100"
      y="45"
      textAnchor="middle"
      fontFamily="Helvetica Neue, Arial, sans-serif"
      fontSize="48"
      fontWeight="700"
      letterSpacing="-5"
      fill="#000"
    >
      EA
    </text>
    <line x1="60" y1="60" x2="140" y2="60" stroke="#000" strokeWidth="1" />
    <text
      x="100"
      y="85"
      textAnchor="middle"
      fontFamily="Helvetica Neue, Arial, sans-serif"
      fontSize="16"
      fontWeight="400"
      letterSpacing="4"
      fill="#555"
    >
      ÉCLAT ATELIER
    </text>
  </svg>
);
