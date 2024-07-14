"use client";
import { email, instagram, linkedin, whatsapp, spotify } from "@/app/assets";
import { SocialMediaName, SocialMedia as SocialMediaType } from "../../typings";
import { useState } from "react";

const socialMedias: SocialMediaType[] = [
  { name: "email", logo: email, link: "mailto:contato@memoh.com.br" },
  {
    name: "instagram",
    logo: instagram,
    link: "https://www.instagram.com/projeto.memoh/",
  },
  {
    name: "linkedin",
    logo: linkedin,
    link: "https://www.linkedin.com/company/memoh/",
  },
  {
    name: "whatsapp",
    logo: whatsapp,
    link: "https://api.whatsapp.com/send/?phone=5521971638030&text&type=phone_number&app_absent=0&utm_medium=email&_hsmi=233019099&_hsenc=p2ANqtz-9GFbNW_oVJ6SR2JFkOHaBLNgoSKBvh0IVJWAvjpUhZHAt92LhuFqcZFGvmLPTJWNE_oTeHdOH478KUgo8R6GRNuCCRHQ&utm_content=233019099&utm_source=hs_email",
  },
  {
    name: "spotify",
    logo: spotify,
    link: "https://open.spotify.com/show/0IT6Qhu5mWrKc9mpeN3dyg?si=817e46805a2443db",
  },
];
export default function SocialMedia() {
  const [activeSocialMedia, setActiveSocialMedia] =
    useState<SocialMediaName | null>(null);
  return (
    <div className="social-media">
      {socialMedias.map((SocialMedia: SocialMediaType) => (
        <a href={SocialMedia.link} target="_blank" key={SocialMedia.name}>
          <SocialMedia.logo
            onMouseEnter={() =>
              setActiveSocialMedia(SocialMedia.name as SocialMediaName)
            }
            onMouseLeave={() => {
              setActiveSocialMedia(null);
            }}
            color={activeSocialMedia === SocialMedia.name ? "#00F800" : "white"}
          />
        </a>
      ))}
    </div>
  );
}

