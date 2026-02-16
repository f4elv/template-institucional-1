import { SiteConfig } from "../types/site";

export const siteConfig: SiteConfig = {
  businessName: "Name of the business",
  businessType: "Tipe of the business",
  tagline: "Slogan or tagline of the business",
  description:
    "Description of the business, its values and what it offers to customers.",

  colors: {
    primary: "#00f00f", // primary color in hex or rgb
    primaryHover: "#E04A2A", // primary hover color in hex or rgb
    secondary: "#FF0800", // secondary color in hex or rgb
    background: "#FFFFFF", // background color in hex or rgb
    accent: "#5733FF", // accent color in hex or rgb
    text: "#000000", // text color in hex or rgb
  },

  social: {
    instagram: "link of instagram",
    facebook: "link of facebook",
  },

  contact: {
    phone: "formatted phone number for display",
    phoneRaw: "raw phone number for whatsapp link",
    adress: "street address of the business",
    city: "city where the business is located",
  },

  hours: {
    weekdays: "opening hours for weekdays",
    saturday: "opening hours for saturday",
    sunday: "opening hours for sunday",
  },

  mapUrl: "link of google maps location of the business",

  hero: {
    title: "Hero section title",
    subtitle: "Hero section subtitle",
    image: "link of the hero image",
    primaryButton: "text for the primary button in the hero section",
    secondaryButton: "text for the secondary button in the hero section",
  },

  services: [
    {
      id: 1,
      title: "Service 1",
      description: "Description of service 1",
      price: "Price of service 1",
    },
  ],

  benefits: [
    {
      title: "Benefit 1",
      description: "Description of benefit 1",
    },
  ],

  about: {
    title: "About section title",
    description:
      "Description for the about section, telling more about the business, its history and values.",
  },

  gallery: [
    "link of gallery image 1",
    "link of gallery image 2",
    "link of gallery image 3",
  ],

  cta: {
    title: "Call to action title",
    description: "Description for the call to action section.",
    buttonText: "Text for the call to action button",
  },
};
