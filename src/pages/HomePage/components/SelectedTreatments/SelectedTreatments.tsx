import styled from "styled-components";
import { StyledLink } from "../../../../components/StyledLink";
import { FlexContainer } from "../../../../components/FlexContainer";
import { selectedTreatments } from "../../../../data/selectedTreatments";
import Card from "../../../../components/Card/Card";
import { Categories } from "../../../../data/categories";

const IconBox = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffffa5;
  font-size: 35px;

  color: ${({ theme }) => theme.colors.lipstick};
`;

export const SelectedTreatments = () => {
  return (
    <>
      <FlexContainer>
        <div style={{ textAlign: "center", padding: "2rem", width: "700px" }}>
          <h1>Elegance comes from being as beautiful inside as outside</h1>
          <span>
            Your journey to timeless beauty begins with self-care and
            confidence.
          </span>
        </div>
        <FlexContainer
          width="100%"
          height="auto"
          style={{ gap: "8px" }}
          flexDirection="row"
          justifyContent="center"
        >
          {Categories.map((card, index) => (
            <Card
              key={index}
              width="300px"
              image={card.image}
              justifyContent="flex-start"
              alignItems="flex-end"
              href="/"
            >
              <FlexContainer
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="flex-end"
                margin="15px"
              >
                <IconBox>{card.icon}</IconBox>
                <h2>{card.title}</h2>
              </FlexContainer>
            </Card>
          ))}
        </FlexContainer>
      </FlexContainer>
      <FlexContainer
        width="100%"
        height="500px"
        style={{ gap: "8px" }}
        flexDirection="row"
        justifyContent="center"
        alignItems="flex-start"
        margin="40px 0 100px 0"
      >
        <img
          src="src/assets/pricesImage.jpg"
          alt="Hero Image"
          style={{
            width: "300px",
            height: "100%",
            objectFit: "cover",
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
            <h1>Treatments and Prices</h1>
            <span>
              Browse a few of our curated treatments with transparent pricing
              beauty tailored for you.
            </span>
            {selectedTreatments.map((treatment, index) => (
              <FlexContainer
                key={index}
                width="100%"
                height="auto"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <p>{treatment.name}</p>
                <p>{treatment.price}</p>
              </FlexContainer>
            ))}
          </FlexContainer>
          <StyledLink to="/">View All Treatments</StyledLink>
        </FlexContainer>
      </FlexContainer>
    </>
  );
};
export default SelectedTreatments;
