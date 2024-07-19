"use client";

import clsx from "clsx";
import { useCallback, useRef, useState } from "react";
import "./styles.scss";
import Image from "next/image";
import { arrow } from "@/app/assets";
import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

export default function Accordion({
  title,
  content,
}: {
  title: string;
  content: RichTextField;
}) {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0");

  const contentSpace = useRef<HTMLDivElement>(null);

  const toggleAccordion = useCallback(() => {
    setActive(!active);
    setHeight(active ? "0px" : `${contentSpace.current?.scrollHeight ?? 0}px`);
  }, [setActive, setHeight, contentSpace, active]);

  return (
    <div className="accordion accordion--container">
      <div onClick={toggleAccordion} className="accordion--title">
        <p>{title}</p>
        <button
          className={clsx("accordion--toggle", active ? "active" : "disabled")}
        >
          <Image src={arrow} alt="abrir/fechar" />
        </button>
      </div>
      <div
        className="accordion--content-container"
        ref={contentSpace}
        style={{ maxHeight: height }}
      >
        <div className="accordion--content">
          <PrismicRichText field={content} />
        </div>
      </div>
    </div>
  );
}

