import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ACJ International Realty",
    short_name: "ACJ International Realty",
    description:
      "ACJ International Realty LLC offers expert consulting services in the commercial real estate sector. We specialize in assisting international companies in expanding their business within New York and New Jersey.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#FFFFFF",
    icons: [
      {
        src: "/favicon144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
