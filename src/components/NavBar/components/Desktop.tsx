import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FlexContainer } from "../../FlexContainer";
import { Logo } from "../../Logo";

const Nav = styled.nav`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
`;

interface sectionProps {
  flex?: string;
}
const Section = styled.div<sectionProps>`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex: ${({ flex }) => flex || "1"};
  justify-content: center;
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.charcoal};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.blush};
  }
  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gold};
  }
  min-width: fit-content;
`;

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: ${({ theme }) => theme.colors.ivory};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  margin: 0;
  list-style: none;
  min-width: 120px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  opacity: 0;
  visibility: hidden;

  transition: opacity 0.25s ease-out, transform 0.25s ease-out,
    visibility 0.25s ease-out;

  ${DropdownContainer}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
  }
`;

const DropdownItem = styled.li`
  width: 100%;
  text-align: center;

  & > a {
    display: block;
    padding: ${({ theme }) => theme.spacing.xs};
    ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.charcoal};
    text-decoration: none;
    font-weight: 500;

    &:hover {
      background: ${({ theme }) => theme.colors.blush}10;
      color: ${({ theme }) => theme.colors.blush};
    }

    &.active {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.gold};
    }
  }
`;

const Desktop = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/treatments#${encodeURIComponent(category)}`);
  };
  return (
    <Nav>
      <Section flex="2">
        <StyledLink to="https://facebook.com">
          <FaFacebook size={20} />
        </StyledLink>
        <StyledLink to="https://instagram.com">
          <FaInstagram size={20} />
        </StyledLink>
      </Section>
      <Section flex="8">
        <FlexContainer width="85px" justifyContent="center">
          <StyledLink to="/" end>
            Home
          </StyledLink>
        </FlexContainer>

        <DropdownContainer>
          <FlexContainer width="85px" justifyContent="center">
            <StyledLink to="/services">Services</StyledLink>
          </FlexContainer>
          <DropdownMenu>
            {["Hair", "Nails", "Face", "Body"].map((sub) => (
              <DropdownItem key={sub}>
                <a
                  onClick={() => handleCategoryClick(sub)}
                  style={{ cursor: "pointer" }}
                >
                  {sub}
                </a>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </DropdownContainer>

        <Logo />

        <FlexContainer width="85px" justifyContent="center">
          <StyledLink to="/about">About Us</StyledLink>
        </FlexContainer>
        <FlexContainer width="85px" justifyContent="center">
          <StyledLink to="/contact">Contact Us</StyledLink>
        </FlexContainer>
      </Section>
      <Section flex="2" />
    </Nav>
  );
};
export default Desktop;
