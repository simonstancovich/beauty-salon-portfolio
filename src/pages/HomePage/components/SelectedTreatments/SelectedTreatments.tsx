import { FlexContainer } from "../../../../components/FlexContainer";
import { HeaderSubtitleContainer } from "./SelectedTreatments.styled";

interface SelectedTreatmentsProps {
  heroTitle?: string;
  heroSubtitle?: string;
}

export const SelectedTreatments: React.FC<SelectedTreatmentsProps> = ({
  heroTitle,
  heroSubtitle,
}: SelectedTreatmentsProps) => {
  return (
    <FlexContainer>
      <HeaderSubtitleContainer>
        <h1>{heroTitle || "heroTitle"}</h1>
        <span>{heroSubtitle || "heroSubtitle"}</span>
      </HeaderSubtitleContainer>
    </FlexContainer>
  );
};
export default SelectedTreatments;
