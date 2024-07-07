"use client";

import { menu } from "@/app/assets";
import Image from "next/image";
import { forwardRef } from "react";

const MenuMobileButton = forwardRef<HTMLButtonElement, any>((props, ref) => {
  return (
    <button ref={ref} className="header--menu-mobile" {...props}>
      <Image src={menu} height={42} width={42} alt="menu de links" />
    </button>
  );
});

MenuMobileButton.displayName = "MenuMobileButton";

export default MenuMobileButton;

