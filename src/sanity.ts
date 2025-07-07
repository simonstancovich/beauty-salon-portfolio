import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: "9ksnlrzq", // from sanity.json or manage.sanity.io
  dataset: "production", // or your dataset name
  apiVersion: "2023-07-01", // use a fixed YYYY-MM-DD date
  useCdn: true, // `false` if you need the freshest data
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);
