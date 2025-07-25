import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebook, FaBars } from "react-icons/fa";
import { useState } from "react";
import { FlexContainer } from "../../FlexContainer";
import { Logo } from "../../Logo";

const MobileNav = styled.nav`
  width: 100%;
  padding: 1rem 1.5rem;
`;

const TopBar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.charcoal};
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 0;
  display: block;

  &.active {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const MenuToggle = styled.button`
  position: absolute;
  left: 0;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.charcoal};
  padding: 0;

  &:hover {
    outline: none;
    box-shadow: none;
    background-color: ${({ theme }) => theme.colors.ivory};
    border: 1px solid transparent;
  }
`;

const Menu = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  margin-top: 1rem;
  gap: 0.5rem;
`;

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/treatments#${encodeURIComponent(category)}`);
    setIsOpen(false);
  };

  return (
    <MobileNav>
      <TopBar>
        <MenuToggle onClick={() => setIsOpen((prev) => !prev)}>
          <FaBars />
        </MenuToggle>
        <Logo />
      </TopBar>

      <Menu isOpen={isOpen}>
        <StyledLink to="/" end onClick={() => setIsOpen(false)}>
          Home
        </StyledLink>

        <StyledLink to="/services" onClick={() => setIsOpen(false)}>
          Services
        </StyledLink>
        {["Hair", "Nails", "Face", "Body"].map((sub) => (
          <StyledLink
            to={`/treatments#${encodeURIComponent(sub)}`}
            as="a"
            key={sub}
            onClick={() => handleCategoryClick(sub)}
            style={{ paddingLeft: "1rem", fontSize: "0.9rem" }}
          >
            {sub}
          </StyledLink>
        ))}

        <StyledLink to="/about" onClick={() => setIsOpen(false)}>
          About Us
        </StyledLink>
        <StyledLink to="/contact" onClick={() => setIsOpen(false)}>
          Contact Us
        </StyledLink>

        <FlexContainer gap="1rem" style={{ marginTop: "1rem" }}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook size={20} />
          </a>
        </FlexContainer>
      </Menu>
    </MobileNav>
  );
};

export default Mobile;
