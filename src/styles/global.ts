import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;500;600;700;800&display=swap");


  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: ${({ theme }) => theme.transitions.default};
  }
    html, body, #root {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  html, body {
    min-height:100%;
    height: 100%;
    width: 100%;
    font-family: ${({ theme }) => theme.typography.fonts.body};
    background-attachment: fixed;
    margin: 0;
    overflow-x: hidden;
    }
    
    body {
    background-color: ${({ theme }) => theme.colors.ivory};
    line-height: 1.6;
    font-size: ${({ theme }) => theme.typography.fontSize.base};
  }

  input, textarea {
    padding: ${({ theme }) => theme.spacing.xs};
    border-radius: ${({ theme }) => theme.radius.md}; 
    border: ${({ theme }) =>
      `${theme.border.thin} ${theme.border.style.solid} ${theme.colors.lipstick}`};
    width: 100%;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    margin-bottom: ${({ theme }) => theme.spacing.md}; 
    outline: none;
    transition: border-color 0.3s ease;
  }

  input:focus, textarea:focus {
    border: ${({ theme }) =>
      `${theme.border.thin} ${theme.border.style.solid} ${theme.colors.lipstick}`};
  }

  button {
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) =>
  theme.spacing.md};
    border-radius: ${({ theme }) => theme.radius.xs};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.lipstick};
    font-family: ${({ theme }) => theme.typography.fonts.logo};
    border: ${({ theme }) =>
      `${theme.border.thin} ${theme.border.style.solid} transparent`};
    transition: ${({ theme }) => theme.transitions.default};
    cursor: pointer;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.black};
    border: ${({ theme }) =>
      `${theme.border.thin} ${theme.border.style.solid} ${theme.colors.primary}`};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.typography.fonts.heading};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
    line-height: 1.2;
    /* margin-bottom: ${({ theme }) => theme.spacing.xs}; */
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      font-size: ${({ theme }) => theme.typography.fontSize.xl}; 
    }
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    color: ${({ theme }) => theme.colors.lipstick};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    font-family: ${({ theme }) => theme.typography.fonts.heading};
	  color: ${({ theme }) => theme.colors.white};
    letter-spacing: 0.05em;

  }

  span {
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-family: ${({ theme }) => theme.typography.fonts.body};
	font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
	line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray500};
  }

  p {
    color: ${({ theme }) => theme.colors.charcoal};
    font-family:${({ theme }) => theme.typography.fonts.body};
  }


  


`;
