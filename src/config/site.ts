// This file contains the configuration for the site, including business information, colors, social media links, contact details, opening hours, and content for different sections of the website. You can customize this file to fit the specific needs of your business and ensure that all relevant information is accurately represented on the site.
import { SiteConfig } from "../types/site";

export const siteConfig: SiteConfig = {
  businessName: "Name of the business",
  businessType: "Tipe of the business",
  businessLogo: "link of the business logo",
  tagline: "Slogan or tagline of the business",
  description:
    "Description of the business, its values and what it offers to customers.",

  colors: {
    primary: "#FFFF00", // primary color in hex or rgb
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
    address: "street address of the business",
    city: "city where the business is located",
  },

  hours: {
    weekdays: "opening hours for weekdays",
    saturday: "opening hours for saturday",
    sunday: "opening hours for sunday",
  },

  // Google Maps URL for the business location, used in the contact section to link to the location on Google Maps
  mapUrl: "link of google maps location of the business",

  // Content for the hero section, including title, subtitle, image and button texts
  hero: {
    title: "Hero section title",
    subtitle: "Hero section subtitle",
    image:
      "https://images.unsplash.com/photo-1457794355224-e92bb76cec4c?q=80&w=1225&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    primaryButton: "text for the primary button in the hero section",
    secondaryButton: "text for the secondary button in the hero section",
  },

  // Services that the business offers, with id, title, description and price for each service
  services: [
    {
      id: 1,
      title: "Product 1",
      description: "Description of product 1",
      price: "Price of product 1",
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description of product 2",
      price: "Price of product 2",
    },
    {
      id: 3,
      title: "Product 3",
      description: "Description of product 3",
      price: "Price of product 3",
    },
    {
      id: 4,
      title: "Product 4",
      description: "Description of product 4",
      price: "Price of product 4",
    },
    {
      id: 5,
      title: "Product 5",
      description: "Description of product 5",
      price: "Price of product 5",
    },
    {
      id: 6,
      title: "Product 6",
      description: "Description of product 6",
      price: "Price of product 6",
    },
  ],

  // Benefits of the business, with title and description for each benefit
  benefits: [
    {
      title: "Benefit 1",
      description: "Description of benefit 1",
    },
    {
      title: "Benefit 2",
      description: "Description of benefit 2",
    },
    {
      title: "Benefit 3",
      description: "Description of benefit 3",
    },
    {
      title: "Benefit 4",
      description: "Description of benefit 4",
    },
  ],

  about: {
    title: "About section title",
    description:
      "Description for the about section, telling more about the business, its history and values.",
  },

  // Gallery images, with links to the images to be displayed in the gallery section
  gallery: [
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&h=600&fit=crop",
  ],

  // Call to action section content, with title, description and button text for the call to action section
  cta: {
    title: "Call to action title",
    description: "Description for the call to action section.",
    buttonText: "Text for the call to action button",
  },
};
