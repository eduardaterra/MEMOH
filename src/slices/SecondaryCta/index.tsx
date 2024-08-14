import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import "./styles.scss";
import MemohWhite from "@/app/assets/memoh-white";
import LogoSymbol from "@/app/assets/logo-symbol";
/**
 * Props for `SecondaryCta`.
 */
export type SecondaryCtaProps = SliceComponentProps<Content.SecondaryCtaSlice>;

/**
 * Component for "SecondaryCta" Slices.
 */
const SecondaryCta = ({ slice }: SecondaryCtaProps): JSX.Element => {
  return (
    <section className="secondary-cta">
      <div className="secondary-cta--first-container">
        <div className="secondary-cta--principal-image">
          <PrismicImage field={slice.primary.primaryImage} />
        </div>

        <div className="secondary-cta--introduction">
          <MemohWhite />
          <h3>APRESENTA</h3>
        </div>
      </div>

      <div className="secondary-cta--second-container">
        <div className="text-container">
          <div className="title">
            <PrismicRichText field={slice.primary.title} />
          </div>

          <div className="description">
            <PrismicRichText field={slice.primary.text} />
          </div>
        </div>
        <div className="image">
          <LogoSymbol />
        </div>
      </div>
    </section>
  );
};

export default SecondaryCta;

