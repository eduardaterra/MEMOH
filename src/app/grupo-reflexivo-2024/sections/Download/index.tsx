import { DownloadProps } from "@/slices/Download";
import { PrismicRichText } from "@prismicio/react";
import "./styles.scss";

export default function Download({ slice }: DownloadProps) {
  return (
    <section id="download" className="download download--container">
      <div className="download--content">
        <div className="download--title-container">
          <PrismicRichText field={slice.primary.title} />
        </div>
        <div className="download--content-container">
          <div className="download--text-container">
            <PrismicRichText field={slice.primary.text} />
          </div>
          <div className="download--comming-soon">EM BREVE</div>
        </div>
      </div>
    </section>
  );
}

