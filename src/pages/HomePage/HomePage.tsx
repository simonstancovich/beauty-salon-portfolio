import { Hero } from "./components/Hero/Hero";
import SelectedTreatments from "./components/SelectedTreatments/SelectedTreatments";
import Testimonials from "./components/Testimonials/Testimonials";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <SelectedTreatments />
      <Testimonials />
    </>
  );
};
export default HomePage;
