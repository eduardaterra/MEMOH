import { SVGElement } from "@/app/assets/typings";

export type SocialMediaName =
  | "email"
  | "instagram"
  | "linkedin"
  | "spotify"
  | "whatsapp";

export type SocialMedia = {
  name: SocialMediaName;
  logo: SVGElement;
  link: string;
};

