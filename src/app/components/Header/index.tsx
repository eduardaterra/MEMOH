import Image from "next/image";
import { logoSymbol } from "@/app/assets";

import CTA from "./CTA";
import "./styles.scss";

export default function Header() {
  return (
    <div className="header header--container glassmorphism--regular">
      <div className="header--content">
        <div className="header--icon">
          <Image priority src={logoSymbol} alt="memoh logo" />
        </div>
        <CTA />
      </div>
    </div>
  );
}

