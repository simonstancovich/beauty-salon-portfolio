import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/HomePage/components/Footer/Footer";

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Layout: React.FC = () => (
  <>
    <NavBar />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);

export default Layout;
