import { useLocation } from "react-router";
import { FlexContainer } from "../../components/FlexContainer";
import { StyledLink } from "../../components/StyledLink";
import React, { useEffect, useMemo } from "react";
import styled from "styled-components";

const services = [
  {
    title: "Hair",
    description:
      "Indulge in precision cuts and luxurious hair treatments designed to rejuvenate your locks and elevate your signature style.",
    image: "/pricesImage.jpg",
    treatments: [
      { treatment: "Haircut", price: "$50" },
      { treatment: "Coloring", price: "$100" },
      { treatment: "Hair Treatment", price: "$80" },
      { treatment: "Blowout", price: "$60" },
      { treatment: "Hair Styling", price: "$70" },
    ],
  },
  {
    title: "Nails",
    description:
      "Pamper your hands and feet with our exquisite nail services, from classic manicures to intricate nail art.",
    image: "/nailsPricesImage.jpg",
    treatments: [
      { treatment: "Manicure", price: "$30" },
      { treatment: "Pedicure", price: "$40" },
      { treatment: "Nail Art", price: "$50" },
      { treatment: "Gel Nails", price: "$60" },
      { treatment: "Acrylic Nails", price: "$70" },
    ],
  },
  {
    title: "Face",
    description:
      "Experience rejuvenating facials and skin treatments that enhance your natural glow and promote healthy skin.",
    image: "/facePricesImage.jpg",
    treatments: [
      { treatment: "Facial", price: "$70" },
      { treatment: "Exfoliation", price: "$60" },
      { treatment: "Anti-Aging Treatment", price: "$90" },
      { treatment: "Hydrating Mask", price: "$50" },
      { treatment: "Acne Treatment", price: "$80" },
    ],
  },
  {
    title: "Body",
    description:
      "Indulge in luxurious body treatments that relax, detoxify, and rejuvenate your skin, leaving you feeling refreshed.",
    image: "/bodyPricesImage.jpg",
    treatments: [
      { treatment: "Full Body Massage", price: "$100" },
      { treatment: "Body Scrub", price: "$80" },
      { treatment: "Detox Wrap", price: "$90" },
      { treatment: "Hot Stone Massage", price: "$120" },
      { treatment: "Aromatherapy Massage", price: "$110" },
    ],
  },
];

const TitleContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 250px;
    align-items: center;
  }
`;

const TreatmentsContainer = styled(FlexContainer)<{
  flexDirection: "row" | "row-reverse";
}>`
  flex-direction: ${({ flexDirection }) => flexDirection};
  width: 100%;
  height: 500px;
  gap: 8px;
  justify-content: center;
  align-items: flex-start;
  margin: 40px 0 100px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    max-width: 250px;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    gap: 8px;
    margin: 0 0 50px 0;
  }
`;

const TreatmentImage = styled.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 250px;
    align-items: center;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const TreatmentCategoryContainer = styled(FlexContainer)`
  width: 500px;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const TreatmentsTextContainer = styled(FlexContainer)`
  width: 500px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 250px;
  }
`;

const TreatmentTextContainer = styled(FlexContainer)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #ccc;
  padding: 8px 0;
`;

export const ServicesPage = () => {
  const location = useLocation();

  const sectionRefs = useMemo(() => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {};
    services.forEach((cat) => {
      refs[cat.title] = React.createRef<HTMLDivElement>();
    });
    return refs;
  }, []);

  useEffect(() => {
    const hash = decodeURIComponent(location.hash.replace("#", ""));
    const ref = sectionRefs[hash];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash, sectionRefs]);
  return (
    <FlexContainer>
      <TitleContainer>
        <h1>Services</h1>
        <span>
          Our curated menu of luxury treatments—designed to leave you radiant
          and confident.
        </span>
      </TitleContainer>
      {services.map((service, index) => (
        <TreatmentsContainer
          flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
        >
          <TreatmentImage src={service.image} alt="Hero Image" />
          <TreatmentCategoryContainer>
            <TreatmentsTextContainer>
              <h1>{service.title}</h1>
              <span>{service.description}</span>
              {service.treatments.map((treatment, index) => (
                <TreatmentTextContainer key={index}>
                  <p>{treatment.treatment}</p>
                  <p>{treatment.price}</p>
                </TreatmentTextContainer>
              ))}
            </TreatmentsTextContainer>
            <StyledLink to={`/treatments#${service.title}`}>
              View All Treatments
            </StyledLink>
          </TreatmentCategoryContainer>
        </TreatmentsContainer>
      ))}
    </FlexContainer>
  );
};
export default ServicesPage;
