import { useLocation } from "react-router";
import { useEffect } from "react";
import { FlexContainer } from "../../../../components/FlexContainer";

const services = [
  {
    title: "Hair",
    description:
      "Indulge in precision cuts and luxurious hair treatments designed to rejuvenate your locks and elevate your signature style.",
    image: "/pricesImage.jpg",
    treatments: [
      {
        treatment: "Haircut",
        price: "$50",
        description: "Precision haircut tailored to your style",
      },
      {
        treatment: "Coloring",
        price: "$100",
        description: "Vibrant hair coloring services",
      },
      {
        treatment: "Hair Treatment",
        price: "$80",
        description: "Deep conditioning and nourishing treatments",
      },
      {
        treatment: "Blowout",
        price: "$60",
        description: "Professional blowout for a polished look",
      },
      {
        treatment: "Hair Styling",
        price: "$70",
        description: "Expert styling for any occasion",
      },
      {
        treatment: "Hair Extensions",
        price: "$200",
        description: "Premium hair extensions for added volume and length",
      },
      {
        treatment: "Keratin Treatment",
        price: "$150",
        description: "Smoothing treatment for frizz-free hair",
      },
      {
        treatment: "Scalp Treatment",
        price: "$90",
        description: "Therapeutic scalp treatment for healthy hair growth",
      },
      {
        treatment: "Hair Consultation",
        price: "$30",
        description: "Personalized consultation to discuss your hair goals",
      },
    ],
  },
  {
    title: "Nails",
    description:
      "Pamper your hands and feet with our exquisite nail services, from classic manicures to intricate nail art.",
    image: "/nailsPricesImage.jpg",
    treatments: [
      {
        treatment: "Manicure",
        price: "$30",
        description: "Classic manicure with polish",
      },
      {
        treatment: "Pedicure",
        price: "$40",
        description: "Relaxing pedicure with foot massage",
      },
      {
        treatment: "Nail Art",
        price: "$50",
        description: "Custom nail art designs",
      },
      {
        treatment: "Gel Nails",
        price: "$60",
        description: "Long-lasting gel manicure",
      },
      {
        treatment: "Acrylic Nails",
        price: "$70",
        description: "Durable acrylic nail extensions",
      },
      {
        treatment: "Nail Repair",
        price: "$20",
        description: "Repair broken or damaged nails",
      },
      {
        treatment: "Nail Polish Change",
        price: "$25",
        description: "Quick polish change for hands or feet",
      },
      {
        treatment: "French Manicure",
        price: "$35",
        description: "Classic French manicure with a modern twist",
      },
      {
        treatment: "Nail Buffing",
        price: "$15",
        description: "Buffing and shining for natural nails",
      },
      {
        treatment: "Nail Strengthening Treatment",
        price: "$30",
        description: "Strengthening treatment for weak nails",
      },
      {
        treatment: "Paraffin Wax Treatment",
        price: "$25",
        description: "Moisturizing paraffin wax treatment for hands or feet",
      },
      {
        treatment: "Nail Polish Removal",
        price: "$15",
        description: "Gentle removal of nail polish",
      },
    ],
  },
  {
    title: "Face",
    description:
      "Experience rejuvenating facials and skin treatments that enhance your natural glow and promote healthy skin.",
    image: "/facePricesImage.jpg",
    treatments: [
      {
        treatment: "Facial",
        price: "$70",
        description: "Rejuvenating facial treatment",
      },
      {
        treatment: "Exfoliation",
        price: "$60",
        description: "Gentle exfoliation to remove dead skin cells",
      },
      {
        treatment: "Anti-Aging Treatment",
        price: "$90",
        description: "Targeted anti-aging facial",
      },
      {
        treatment: "Hydrating Mask",
        price: "$50",
        description: "Deeply hydrating facial mask",
      },
      {
        treatment: "Acne Treatment",
        price: "$80",
        description: "Specialized treatment for acne-prone skin",
      },
      {
        treatment: "Brightening Facial",
        price: "$75",
        description: "Facial to brighten and even skin tone",
      },
      {
        treatment: "Microdermabrasion",
        price: "$100",
        description: "Exfoliating treatment for smoother skin",
      },
      {
        treatment: "Chemical Peel",
        price: "$120",
        description: "Chemical peel for skin rejuvenation",
      },
      {
        treatment: "LED Light Therapy",
        price: "$85",
        description: "LED therapy for various skin concerns",
      },
      {
        treatment: "Collagen Mask",
        price: "$70",
        description: "Collagen-infused mask for skin elasticity",
      },
    ],
  },
  {
    title: "Body",
    description:
      "Indulge in luxurious body treatments that relax, detoxify, and rejuvenate your skin, leaving you feeling refreshed.",
    image: "/bodyPricesImage.jpg",
    treatments: [
      {
        treatment: "Full Body Massage",
        price: "$100",
        description: "Relaxing full body massage",
      },
      {
        treatment: "Body Scrub",
        price: "$80",
        description: "Exfoliating body scrub",
      },
      {
        treatment: "Detox Wrap",
        price: "$90",
        description: "Detoxifying body wrap",
      },
      {
        treatment: "Hot Stone Massage",
        price: "$120",
        description: "Soothing hot stone massage",
      },
      {
        treatment: "Aromatherapy Massage",
        price: "$110",
        description: "Aromatherapy massage with essential oils",
      },
      {
        treatment: "Body Polish",
        price: "$70",
        description: "Refreshing body polish treatment",
      },
      {
        treatment: "Cellulite Treatment",
        price: "$130",
        description: "Targeted cellulite treatment",
      },
      {
        treatment: "Back Treatment",
        price: "$60",
        description: "Cleansing back treatment",
      },
      {
        treatment: "Lymphatic Drainage Massage",
        price: "$140",
        description: "Lymphatic drainage massage for detoxification",
      },
    ],
  },
];

export const TreatmentsContainer = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.substring(1));
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <FlexContainer>
      {services.map((service, index) => (
        <FlexContainer
          key={service.title}
          as="section"
          id={service.title}
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
            alt={`${service.title} Image`}
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
              {service.treatments.map((treatment, idx) => (
                <FlexContainer
                  key={idx}
                  width="100%"
                  height="auto"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <span>{treatment.treatment}</span>
                  <span>{treatment.price}</span>
                </FlexContainer>
              ))}
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      ))}
    </FlexContainer>
  );
};

export default TreatmentsContainer;
