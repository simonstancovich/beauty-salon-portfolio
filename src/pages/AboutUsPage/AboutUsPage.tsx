import { FlexContainer } from "../../components/FlexContainer";

const employees = [
  {
    name: "Johannes Markman",
    role: "Founder & Master Stylist",
    image: "/male1.jpg",
    description:
      "With over 15 years of experience, Johannes brings a blend of artistry and expertise to every treatment. His passion for beauty and dedication to client satisfaction set the standard at our studio.",
  },
  {
    name: "Elena Petrova",
    role: "Senior Stylist",
    image: "/female1.jpg",
    description:
      "Elena’s creative flair and attention to detail make her a favorite among clients. She specializes in color treatments and personalized styling that enhances each individual’s natural beauty.",
  },
  {
    name: "Liam O'Connor",
    role: "Nail Technician",
    image: "/male2.jpg",
    description:
      "Liam is known for his precision and innovative nail art techniques. He transforms nails into stunning works of art, ensuring every client leaves with a smile.",
  },
  {
    name: "Sofia Rossi",
    role: "Esthetician",
    image: "/female2.jpg",
    description:
      "Sofia’s gentle touch and holistic approach to skincare provide clients with a rejuvenating experience. She customizes treatments to nourish and revitalize the skin, leaving it glowing.",
  },
];

export const AboutUsPage = () => {
  return (
    <FlexContainer>
      <FlexContainer>
        <h1>More Than Beauty — It’s a Ritual</h1>
        <p style={{ maxWidth: "800px" }}>
          At our studio, every treatment is a moment of care, confidence, and
          calm. We're a team of passionate artists dedicated to helping you look
          and feel your absolute best — with elegance, intention, and heart.
        </p>
      </FlexContainer>
      <span style={{ maxWidth: "800px" }}>
        We believe beauty is more than skin deep. It’s about self-expression,
        empowerment, and embracing your unique style. Our mission is to provide
        a sanctuary where you can unwind, rejuvenate, and leave feeling radiant.
      </span>
      <FlexContainer margin="100px 0 0 0">
        <h1>Meet our team</h1>
        <FlexContainer
          style={{ gap: "8px" }}
          margin="50px 0 50px 0"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {employees.map((employee, index) => (
            <FlexContainer
              as="article"
              id={employee.name}
              key={index}
              flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
              justifyContent="flex-start"
              alignItems="flex-start"
              margin={index % 2 === 0 ? "0 20px 0 0" : "0 0 0 20px"}
              style={{ gap: "16px", maxWidth: "800px" }}
            >
              <img
                src={employee.image}
                alt={`${employee.name} Image`}
                style={{
                  width: "80%",
                  objectFit: "cover",
                  borderRadius: "8px",
                  maxWidth: "300px",
                }}
              />
              <FlexContainer
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                style={{ gap: "8px" }}
              >
                <h2>{employee.name}</h2>
                <span>{employee.role}</span>
                <p>{employee.description}</p>
              </FlexContainer>
            </FlexContainer>
          ))}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};
export default AboutUsPage;
