"use client";
import { email, instagram, linkedin, whatsapp, spotify } from "@/app/assets";
import { SocialMediaName, SocialMedia as SocialMediaType } from "../../typings";
import { useState } from "react";

const socialMedias: SocialMediaType[] = [
  { name: "email", logo: email, link: "/#" },
  { name: "instagram", logo: instagram, link: "/#" },
  { name: "linkedin", logo: linkedin, link: "/#" },
  { name: "whatsapp", logo: whatsapp, link: "/#" },
  { name: "spotify", logo: spotify, link: "/#" },
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

