"use client";
import { CtaProps } from "@/slices/Cta";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { asImageSrc } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import Button from "@/app/components/Button";
import { logoComplete } from "@/app/assets";
import { sendGTMEvent } from "@next/third-parties/google";
import "./styles.scss";
import { useInView } from "framer-motion";

export default function CTA({ slice }: CtaProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: true });
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.clientHeight);
    }
  }, []);
  return (
    <section ref={elementRef} className="cta--container" id="cta">
      <Image
        className="cta--image"
        placeholder="blur"
        priority
        loading="eager"
        objectFit="cover"
        blurDataURL="asImageSrc(slice.primary.image)"
        src={asImageSrc(slice.primary.image) ?? ""}
        alt={slice.primary.image.alt ?? "Grupo Reflexivo Memoh"}
        fill
      />
      <div className="cta--content">
        <div
          className="cta--content-container"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
        >
          <div className="cta--text-container">
            <div className="title">
              <h3>{slice.primary.title}</h3>
            </div>
            <div className="description ">
              <PrismicRichText field={slice.primary.description} />
            </div>
            <div className="cta--buttons">
              <Button
                variant="secondary"
                onClick={() => {
                  window.scrollTo({ top: height, behavior: "smooth" });
                }}
              >
                SAIBA MAIS
              </Button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfNBQBGpe-ds51VhPdGul1CD50-DEpGzxLD8iWr-EGaXXMwAQ/viewform/"
                target="_blank"
              >
                <Button
                  onClick={() =>
                    sendGTMEvent({
                      event: "subscribeClick",
                      value: { location: "CTA" },
                    })
                  }
                >
                  INSCREVA-SE
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="cta--brand">
        <Image src={logoComplete} alt="memoh logo" />
      </div>
    </section>
  );
}

