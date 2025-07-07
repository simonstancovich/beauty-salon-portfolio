import styled from "styled-components";

interface HeroProps {
  mainPhotoUrl?: string;
}

const HeroSection = styled.section`
  width: 100%;
  height: 80vh;
  overflow: hidden;
`;

export const Hero = ({ mainPhotoUrl }: HeroProps) => {
  return (
    console.log("Hero component rendered with mainPhotoUrl:", mainPhotoUrl),
    (
      <>
        <HeroSection>
          <img
            src={mainPhotoUrl || "https://placehold.co/1920?text=Hero+Image"}
            style={{
              display: "block",
              width: "100%",
              objectFit: "cover",
              height: "100%",
            }}
          />
        </HeroSection>
      </>
    )
  );
};
export default Hero;
