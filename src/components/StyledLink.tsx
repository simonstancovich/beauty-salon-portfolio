import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.lipstick};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.roseGold};
  }
`;
