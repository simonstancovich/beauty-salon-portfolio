import { FlexContainer } from "../../../../components/FlexContainer";
import styled from "styled-components";

interface SelectedTreatmentsProps {
  heroTitle?: string;
  heroSubtitle?: string;
}

const HeaderSubtitleContainer = styled.div`
  text-align: center;
  padding: 2rem;
  width: 700px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    max-width: 700px;
    width: 100%;
  }
`;

export const SelectedTreatments: React.FC<SelectedTreatmentsProps> = ({
  heroTitle,
  heroSubtitle,
}: SelectedTreatmentsProps) => {
  return (
    <>
      <FlexContainer>
        <HeaderSubtitleContainer>
          <h1>{heroTitle || "heroTitle"}</h1>
          <span>{heroSubtitle || "heroSubtitle"}</span>
        </HeaderSubtitleContainer>
      </FlexContainer>
    </>
  );
};
export default SelectedTreatments;
