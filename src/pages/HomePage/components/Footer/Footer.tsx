import styled from "styled-components";
import { FlexContainer } from "../../../../components/FlexContainer";
import { Logo } from "../../../../components/Logo";
import { RiMastercardLine, RiVisaLine } from "react-icons/ri";

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 35px;

  color: ${({ theme }) => theme.colors.gray500};
`;

export const Footer = () => {
  return (
    <FlexContainer height="150px" padding="20px 0 0 0">
      <Logo />
      <FlexContainer
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <FlexContainer
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-end"
          width="300px"
          height="100%"
          margin="0 0 20px 20px"
        >
          <span>© 2025 Hairdresser Portfolio</span>
        </FlexContainer>
        <FlexContainer flexDirection="row" justifyContent="flex-end">
          <IconWrapper>
            <RiVisaLine />
          </IconWrapper>
          <IconWrapper>
            <RiMastercardLine />
          </IconWrapper>
          <IconWrapper></IconWrapper>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};
export default Footer;
