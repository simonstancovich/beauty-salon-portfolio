import { FlexContainer } from "../../components/FlexContainer";
import { StyledLink } from "../../components/StyledLink";

const services = [
  {
    title: "Hair",
    description:
      "Indulge in precision cuts and luxurious hair treatments designed to rejuvenate your locks and elevate your signature style.",
    image: "public/pricesImage.jpg",
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
    image: "public/nailsPricesImage.jpg",
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
    image: "public/FacePricesImage.jpg",
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
    image: "public/BodyPricesImage.jpg",
    treatments: [
      { treatment: "Full Body Massage", price: "$100" },
      { treatment: "Body Scrub", price: "$80" },
      { treatment: "Detox Wrap", price: "$90" },
      { treatment: "Hot Stone Massage", price: "$120" },
      { treatment: "Aromatherapy Massage", price: "$110" },
    ],
  },
];

export const ServicesPage = () => {
  return (
    <FlexContainer>
      <h1>Services</h1>
      <span>
        Our curated menu of luxury treatments—designed to leave you radiant and
        confident.
      </span>
      {services.map((service, index) => (
        <FlexContainer
          width="100%"
          height="500px"
          style={{ gap: "8px" }}
          flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
          justifyContent="center"
          alignItems="flex-start"
          margin="40px 0 100px 0"
        >
          <img
            src={service.image}
            alt="Hero Image"
            style={{
              width: "300px",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <FlexContainer
            width="500px"
            height="100%"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <FlexContainer
              width="500px"
              height="100%"
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              gap="8px"
            >
              <h1>{service.title}</h1>
              <span>{service.description}</span>
              {service.treatments.map((treatment, index) => (
                <FlexContainer
                  key={index}
                  width="100%"
                  height="auto"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  style={{ borderBottom: "1px solid #ccc", padding: "8px 0" }}
                >
                  <p>{treatment.treatment}</p>
                  <p>{treatment.price}</p>
                </FlexContainer>
              ))}
            </FlexContainer>
            <StyledLink to="/">View All Treatments</StyledLink>
          </FlexContainer>
        </FlexContainer>
      ))}
    </FlexContainer>
  );
};
export default ServicesPage;
