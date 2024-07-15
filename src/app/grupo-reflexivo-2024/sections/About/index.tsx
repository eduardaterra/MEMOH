"use client";
import { AboutProps } from "@/slices/About";
import "./styles.scss";
import { PrismicRichText } from "@prismicio/react";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function About({ slice }: AboutProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(elementRef, { once: true });
  return (
    <section id="about" className="about about--container">
      <div className="about--brand-slug">
        <span>REFLITA SOBRE O QUE É DA NOSSA CONTA.</span>
      </div>
      <div
        className="about--content"
        ref={elementRef}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <div className="about--text-container">
          <div className="title">
            <PrismicRichText field={slice.primary.title} />
          </div>
          <div className="description">
            <PrismicRichText field={slice.primary.description} />
          </div>
          <div className="spotify">
            <iframe
              src="https://open.spotify.com/embed/playlist/2TlTfbQsJYf3vkBcON1mpB?utm_source=generator&theme=0"
              width="100%"
              style={{ border: "none" }}
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="eager"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

