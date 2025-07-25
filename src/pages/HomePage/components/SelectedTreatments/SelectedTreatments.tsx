import { StyledLink } from "../../../../components/StyledLink";
import { FlexContainer } from "../../../../components/FlexContainer";
import Card from "../../../../components/Card/Card";
import IconContainer from "../../../../components/IconContainer";

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

interface SelectedTreatmentsProps {
  heroTitle?: string;
  heroSubtitle?: string;
  services?: Services[];
  treatmentsImageUrl?: string;
  treatmentsTitle?: string;
  treatmentsSubtitle?: string;
  treatmentsPreview?: TreatmentsPreview;
}

export const SelectedTreatments: React.FC<SelectedTreatmentsProps> = ({
  heroTitle,
  heroSubtitle,
  services,
  treatmentsImageUrl,
  treatmentsSubtitle,
  treatmentsPreview,
}: SelectedTreatmentsProps) => {
  console.log("treatmentsPreview", treatmentsImageUrl, treatmentsPreview);
  return (
    <>
      <FlexContainer>
        <div style={{ textAlign: "center", padding: "2rem", width: "700px" }}>
          <h1>{heroTitle || "heroTitle"}</h1>
          <span>{heroSubtitle || "heroSubtitle"}</span>
        </div>
        <FlexContainer
          width="100%"
          height="auto"
          style={{ gap: "8px" }}
          flexDirection="row"
          justifyContent="center"
        >
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
              <FlexContainer
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="flex-end"
                margin="15px"
              >
                <IconContainer iconName={card.iconName} />
                <h2>{card.title}</h2>
              </FlexContainer>
            </Card>
          ))}
        </FlexContainer>
      </FlexContainer>
      <FlexContainer
        width="100%"
        height="500px"
        gap="8px"
        flexDirection="row"
        justifyContent="center"
        alignItems="flex-start"
        margin="40px 0 100px 0"
      >
        <img
          src={
            treatmentsImageUrl ||
            "https://placehold.co/300?text=Treatments+Image"
          }
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
      </FlexContainer>
    </>
  );
};
export default SelectedTreatments;
