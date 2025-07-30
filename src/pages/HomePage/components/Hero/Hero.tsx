import { HeroSection, Image } from "./Hero.styled";

interface HeroProps {
  mainPhotoUrl?: string;
}

export const Hero = ({ mainPhotoUrl }: HeroProps) => {
  return (
    <HeroSection>
      <Image
        src={mainPhotoUrl || "https://placehold.co/1920?text=Hero+Image"}
      />
    </HeroSection>
  );
};
export default Hero;
