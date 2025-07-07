import { HOME_PAGE_QUERY } from "../../queries/homePage";
import { client } from "../../sanity";
import { Hero } from "./components/Hero/Hero";
import SelectedTreatments from "./components/SelectedTreatments/SelectedTreatments";
import Testimonials from "./components/Testimonials/Testimonials";
import { useEffect, useState } from "react";

interface Service {
  title: string;
  imageUrl: string;
  iconName: string;
  link?: string;
}

interface Treatment {
  title: string;
  price: string;
}

interface HomeData {
  heroTitle: string;
  heroSubtitle: string;
  mainPhotoUrl: string;
  services: Service[];
  treatmentsImageUrl: string;
  treatmentsTitle: string;
  treatmentsSubtitle: string;
  treatmentsPreview: {
    title: string;
    subtitle: string;
    imageUrl: string;
    treatments: Treatment[];
    link?: string;
  };
}

export const HomePage = () => {
  const [data, setData] = useState<HomeData | null>(null);

  useEffect(() => {
    client.fetch(HOME_PAGE_QUERY).then(setData).catch(console.error);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Hero mainPhotoUrl={data?.mainPhotoUrl} />
      <SelectedTreatments
        heroTitle={data?.heroTitle}
        heroSubtitle={data?.heroSubtitle}
        services={data?.services}
        treatmentsTitle={data?.treatmentsTitle}
        treatmentsSubtitle={data?.treatmentsSubtitle}
        treatmentsImageUrl={data?.treatmentsImageUrl}
        treatmentsPreview={data.treatmentsPreview}
      />
      <Testimonials />
    </>
  );
};
export default HomePage;
