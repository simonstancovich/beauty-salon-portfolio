import React from "react";
import styled from "styled-components";
import { getIcon } from "../utils/getIcon";

interface IconContainerProps {
  iconName: string;
  iconSize?: string;
}

const IconBox = styled.div<{ iconSize?: string }>`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffffa5;
  font-size: ${({ iconSize }) => iconSize};

  color: ${({ theme }) => theme.colors.lipstick};
`;

const IconContainer: React.FC<IconContainerProps> = ({
  iconName,
  iconSize = "35px",
}: IconContainerProps) => {
  const Icon = iconName ? getIcon(iconName) : null;

  return <IconBox iconSize={iconSize}>{Icon ? <Icon /> : null}</IconBox>;
};

export default IconContainer;
