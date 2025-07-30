import { StyledLink } from "../../../../components/StyledLink";
import { FlexContainer } from "../../../../components/FlexContainer";
import Card from "../../../../components/Card/Card";
import {
  CardContentWrapper,
  CardTitle,
  IconWrapper,
  MenuWrapper,
  TreatmentsImageContainer,
  TreatmentsWrapper,
} from "./TreatmentsMeny.styled";

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
