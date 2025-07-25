import styled from "styled-components";

interface HeroProps {
  mainPhotoUrl?: string;
}

const HeroSection = styled.section`
  width: 100%;
  height: 80vh;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-height: 400px;
    height: 100%;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

export const Hero = ({ mainPhotoUrl }: HeroProps) => {
  return (
    <>
      <HeroSection>
        <Image
          src={mainPhotoUrl || "https://placehold.co/1920?text=Hero+Image"}
        />
      </HeroSection>
    </>
  );
};
export default Hero;
