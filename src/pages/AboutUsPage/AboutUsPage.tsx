import styled from "styled-components";
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

const MainTextWrapper = styled(FlexContainer)`
  max-width: 800px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    text-align: center;
    flex-direction: column;
    max-width: 300px;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    gap: 8px;
  }
`;

const MeetOutTeamContainer = styled(FlexContainer)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    text-align: center;
    flex-direction: column;
    max-width: 300px;
    justify-content: flex-start;
    height: 100%;
    gap: 8px;
  }
`;

const TeamMembersContainer = styled(FlexContainer)`
  gap: 8px;
  margin: 50px 0 50px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 20px 0 0 0;
  }
`;

const TeamMemberContainer = styled(FlexContainer)`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  max-width: 800px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    text-align: left;
    flex-direction: column;
    max-width: 300px;
    justify-content: center;
    height: 100%;
    gap: 8px;
    margin: 0 !important;
  }
`;

const EmployeeImage = styled.img`
  width: 300px;
  object-fit: cover;
  border-radius: 8px;
  max-width: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 100%;
    max-width: 300px;
    display: block;
    margin: 0 auto 1rem;
  }
`;

const EmployeeTextContainer = styled(FlexContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const AboutUsPage = () => {
  return (
    <FlexContainer>
      <MainTextWrapper>
        <FlexContainer>
          <h1>More Than Beauty — It’s a Ritual</h1>
          <p>
            At our studio, every treatment is a moment of care, confidence, and
            calm. We're a team of passionate artists dedicated to helping you
            look and feel your absolute best — with elegance, intention, and
            heart.
          </p>
        </FlexContainer>
        <span>
          We believe beauty is more than skin deep. It’s about self-expression,
          empowerment, and embracing your unique style. Our mission is to
          provide a sanctuary where you can unwind, rejuvenate, and leave
          feeling radiant.
        </span>
      </MainTextWrapper>
      <MeetOutTeamContainer>
        <h1>Meet our team</h1>
        <TeamMembersContainer>
          {employees.map((employee, index) => (
            <TeamMemberContainer
              as="article"
              id={employee.name}
              key={index}
              flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
              margin={index % 2 === 0 ? "0 20px 0 0" : "0 0 0 20px"}
            >
              <EmployeeImage
                src={employee.image}
                alt={`${employee.name} Image`}
              />
              <EmployeeTextContainer>
                <h2>{employee.name}</h2>
                <span>{employee.role}</span>
                <p>{employee.description}</p>
              </EmployeeTextContainer>
            </TeamMemberContainer>
          ))}
        </TeamMembersContainer>
      </MeetOutTeamContainer>
    </FlexContainer>
  );
};
export default AboutUsPage;
