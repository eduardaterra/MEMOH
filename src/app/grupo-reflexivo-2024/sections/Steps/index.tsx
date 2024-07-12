"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import { PrismicRichText } from "@prismicio/react";
import { StepsProps } from "@/slices/Inscricoes";
import Button from "@/app/components/Button";
import "./styles.scss";

export default function Steps({ slice }: StepsProps) {
  return (
    <section className="steps steps--container">
      <div className="steps--content">
        <div className="steps--title-container">
          <h3>{slice.primary.title}</h3>
          <h4>{slice.primary.subtitle}</h4>
        </div>
        <div className="steps--text-container">
          <PrismicRichText field={slice.primary.text} />
        </div>
        <Button
          onClick={() =>
            sendGTMEvent({
              event: "subscribeClick",
              value: { location: "steps" },
            })
          }
          size="large"
        >
          INSCREVA-SE
        </Button>
      </div>
    </section>
  );
}

