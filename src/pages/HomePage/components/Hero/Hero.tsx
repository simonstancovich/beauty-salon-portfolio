import styled from "styled-components";

const HeroSection = styled.section`
  width: 100%;
  height: 80vh;
  overflow: hidden;
`;

export const Hero = () => {
  return (
    <>
      <HeroSection>
        <img
          src="/hero.jpg"
          style={{
            display: "block",
            width: "100%",
            objectFit: "cover",
            height: "100%",
          }}
        />
      </HeroSection>
    </>
  );
};
export default Hero;
