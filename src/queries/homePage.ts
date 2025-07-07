import groq from "groq";

export const HOME_PAGE_QUERY = groq`
  *[_type == "homePage"][0]{
    heroTitle,
    heroSubtitle,
    "mainPhotoUrl": mainPhoto.asset->url,

    services[] {
      title,
      "imageUrl": image.asset->url,
      iconName,
      link
    },

    "treatmentsImageUrl": treatmentsImage.asset->url,
    treatmentsTitle,
    treatmentsSubtitle,
    treatmentsPreview {
      title,
      subtitle,
      "imageUrl": image.asset->url,
      treatments[] {
        title,
        price
      },
      link
    }
  }
`;
