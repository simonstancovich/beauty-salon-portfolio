import styled from "styled-components";
import { FlexContainer } from "../../../../components/FlexContainer";
import IconContainer from "../../../../components/IconContainer";

export const MenuWrapper = styled(FlexContainer)`
  gap: ${({ theme }) => theme.spacing.sm};
  flex-direction: row;
  justify-content: center;
`;

export const CardContentWrapper = styled(FlexContainer)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin: ${({ theme }) => theme.spacing.md};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`;

export const CardTitle = styled.h2`
  text-shadow: ${({ theme }) => theme.shadow.text};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    writing-mode: vertical-rl;
    text-orientation: upright;
    transform: none;
    white-space: nowrap;
  }
`;
export const IconWrapper = styled(IconContainer)`
  width: 50px;
  height: 50px;
  border-radius: ${({ theme }) => theme.radius.xxs};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 35px;
    height: 35px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    transform: none;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

export const TreatmentsWrapper = styled(FlexContainer)`
  width: 100%;
  height: 500px;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 40px 0 100px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 0;
    padding: ${({ theme }) => theme.spacing.sm};
    height: 400px;
  }
`;

export const TreatmentsImageContainer = styled.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;
