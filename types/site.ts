export interface SiteColors {
  primary: string;
  primaryHover: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface Social {
  instagram: string;
  facebook: string;
  whatsapp: string;
}

export interface Contact {
  phone: string;
  phoneRaw: string;
  adress: string;
  city: string;
}

export interface Hours {
  weekdays: string;
  saturday: string;
  sunday: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  image: string;
  primaryButton: string;
  secondaryButton: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface About {
  title: string;
  description: string;
}

export interface CTA {
  title: string;
  description: string;
  buttonText: string;
}

export interface SiteConfig {
  businessName: string;
  businessType: string;
  tagline: string;
  description: string;

  colors: SiteColors;

  hero: Hero;
  services: Service[];
  benefits: Benefit[];
  about: About;
  gallery: string[];
  social: Social;
  contact: Contact;
  hours: Hours;
  mapUrl: string;

  cta: CTA;
}
