import { GiLipstick } from "react-icons/gi";
import { LiaSpaSolid } from "react-icons/lia";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { PiHairDryerBold } from "react-icons/pi";

export const Categories = [
  {
    icon: <PiHairDryerBold />,
    title: "Hair",
    description:
      "Experience the art of precision haircuts tailored to your style.",
    image: "/hair.jpg",
  },
  {
    icon: <GiLipstick />,
    title: "Makeup",
    description: "Transform your look with our expert coloring services.",
    image: "/makeup.jpg",
  },
  {
    icon: <MdFaceRetouchingNatural />,
    title: "Skin",
    description: "Elevate your style with our professional hair styling.",
    image: "/skin.jpg",
  },
  {
    icon: <LiaSpaSolid />,
    title: "Body",
    description: "Elevate your style with our professional hair styling.",
    image: "/body.jpg",
  },
];
