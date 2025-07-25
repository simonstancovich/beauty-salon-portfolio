import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";
import Layout from "./components/Layout";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import TreatmentsPage from "./pages/TreatmentsPage/TreatmentsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "treatments", element: <TreatmentsPage /> },
      { path: "about", element: <AboutUsPage /> },
      { path: "contact", element: <ContactUsPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
