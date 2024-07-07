"use client";
import Button from "../../Button";
import SocialMedia from "./SocialMedia";
import MenuMobileButton from "./MenuMobileButton";
import { useState } from "react";

export default function CTA() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function toggleMenu() {
    return setIsMenuOpened(!isMenuOpened);
  }
  return (
    <>
      <MenuMobileButton onClick={toggleMenu} />
      <div
        className={`header--cta glassmorphism--regular ${
          isMenuOpened ? "opened" : "closed"
        }`}
      >
        <SocialMedia />
        <div className="subscribe">
          <Button size="small">PARTICIPE</Button>
        </div>
      </div>
    </>
  );
}

