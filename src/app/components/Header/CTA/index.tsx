"use client";
import Button from "../../Button";
import SocialMedia from "./SocialMedia";
import MenuMobileButton from "./MenuMobileButton";
import { useState } from "react";

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
          <Button size="default">PARTICIPE</Button>
        </div>
      </div>
    </>
  );
}

