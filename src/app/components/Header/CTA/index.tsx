"use client";
import { useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import MenuMobileButton from "./MenuMobileButton";
import SocialMedia from "./SocialMedia";
import Button from "../../Button";

export default function CTA() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [hadInteraction, setHadInteraction] = useState(false);

  function toggleMenu() {
    setIsMenuOpened(!isMenuOpened);
    setHadInteraction(true);
  }

  return (
    <>
      <MenuMobileButton onClick={toggleMenu} />
      <div
        className={`header--cta ${
          isMenuOpened ? "opened" : "closed"
        } ${hadInteraction ? "interacted" : ""}`}
      >
        <SocialMedia />
        <div className="subscribe">
          <a href="https://forms.gle/JQSaKwdsQsyZoUHt7" target="_blank">
            <Button
              onClick={() =>
                sendGTMEvent({
                  event: "subscribeClick",
                  value: { location: "header" },
                })
              }
              size="default"
            >
              INSCREVA-SE
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

