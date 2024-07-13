import { logoSymbol as LogoSymbol } from "@/app/assets";

import CTA from "./CTA";
import "./styles.scss";

export default function Header() {
  return (
    <div className="header header--container glassmorphism--regular">
      <div className="header--content">
        <div className="header--icon">
          <LogoSymbol />
        </div>
        <CTA />
      </div>
    </div>
  );
}

