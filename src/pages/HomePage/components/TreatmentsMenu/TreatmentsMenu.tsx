import { StyledLink } from "../../../../components/StyledLink";
import { FlexContainer } from "../../../../components/FlexContainer";
import Card from "../../../../components/Card/Card";
import IconContainer from "../../../../components/IconContainer";
import styled from "styled-components";

interface Services {
  title: string;
  imageUrl: string;
  iconName: string;
  link?: string;
}

interface TreatmentsPreview {
  title: string;
  subtitle: string;
  imageUrl: string;
  treatments: { title: string; price: string }[];
  link?: string;
}

interface TreatmentsMenuProps {
  services?: Services[];
  treatmentsImageUrl?: string;
  treatmentsTitle?: string;
  treatmentsSubtitle?: string;
  treatmentsPreview?: TreatmentsPreview;
}

const MenuWrapper = styled(FlexContainer)`
  gap: 8px;
  flex-direction: row;
  justify-content: center;
`;

const CardContentWrapper = styled(FlexContainer)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 15px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column-reverse;
    align-items: flex-end;
  }
`;

const CardTitle = styled.h2`
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    writing-mode: vertical-rl;
    text-orientation: upright;
    transform: none;
    white-space: nowrap;
  }
`;
const IconWrapper = styled(IconContainer)`
  width: 50px;
  height: 50px;
  border-radius: 2px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 35px;
    height: 35px;
    writing-mode: vertical-rl;
    text-orientation: upright;
    transform: none;
    white-space: nowrap;
    font-size: 20px;
  }
`;

const TreatmentsWrapper = styled(FlexContainer)`
  width: 100%;
  height: 500px;
  gap: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 40px 0 100px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 0;
    padding: 10px;
    height: 400px;
  }
`;

const TreatmentsImageContainer = styled.img`
  width: 300px;
  height: 100%;
  object-fit: cover;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

export const TreatmentsMenu: React.FC<TreatmentsMenuProps> = ({
  services,
  treatmentsImageUrl,
  treatmentsSubtitle,
  treatmentsPreview,
}: TreatmentsMenuProps) => {
  return (
    <FlexContainer>
      <MenuWrapper>
        {services?.map((card) => (
          <Card
            key={card.title}
            width="300px"
            image={
              card.imageUrl || "https://placehold.co/300?text=category+image"
            }
            justifyContent="flex-start"
            alignItems="flex-end"
            href={`/treatments#${encodeURIComponent(card.title) || "/"}`}
          >
            <CardContentWrapper>
              <IconWrapper className="shrink" iconName={card.iconName} />
              <CardTitle>{card.title}</CardTitle>
            </CardContentWrapper>
          </Card>
        ))}
      </MenuWrapper>
      <TreatmentsWrapper>
        <TreatmentsImageContainer
          src={
            treatmentsImageUrl ||
            "https://placehold.co/300?text=Treatments+Image"
          }
          alt="Hero Image"
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
            <h1>{treatmentsPreview?.title || "Treatments and Prices"}</h1>
            <span>
              {treatmentsSubtitle ||
                "Browse a few of our curated treatments with transparent pricing beauty tailored for you."}
            </span>
            {treatmentsPreview?.treatments?.map((treatment, index) => (
              <FlexContainer
                key={index}
                width="100%"
                height="auto"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <p>{treatment.title}</p>
                <p>{treatment.price}</p>
              </FlexContainer>
            ))}
          </FlexContainer>
          <StyledLink to="/treatments">View All Treatments</StyledLink>
        </FlexContainer>
      </TreatmentsWrapper>
    </FlexContainer>
  );
};
export default TreatmentsMenu;
