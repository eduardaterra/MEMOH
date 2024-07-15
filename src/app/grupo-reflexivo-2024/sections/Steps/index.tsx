"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { PrismicRichText } from "@prismicio/react";
import { StepsProps } from "@/slices/Inscricoes";
import Button from "@/app/components/Button";
import "./styles.scss";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Steps({ slice }: StepsProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: true });
  return (
    <section className="steps steps--container">
      <div
        ref={elementRef}
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className="steps--content"
      >
        <div className="steps--title-container">
          <h3>{slice.primary.title}</h3>
          <h4>{slice.primary.subtitle}</h4>
        </div>
        <div className="steps--text-container">
          <PrismicRichText field={slice.primary.text} />
        </div>
        <a href="https://forms.gle/JQSaKwdsQsyZoUHt7" target="_blank">
          <Button
            onClick={() =>
              sendGTMEvent({
                event: "subscribeClick",
                value: { location: "steps" },
              })
            }
            size="default"
          >
            INSCREVA-SE
          </Button>
        </a>
      </div>
    </section>
  );
}

