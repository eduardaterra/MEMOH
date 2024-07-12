import { AboutProps } from "@/slices/About";
import "./styles.scss";
import { PrismicRichText } from "@prismicio/react";

export default function About({ slice }: AboutProps) {
  return (
    <section id="about" className="about about--container">
      <div className="about--brand-slug">
        <span>REFLITA SOBRE O QUE É DA NOSSA CONTA.</span>
      </div>
      <div className="about--content">
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

