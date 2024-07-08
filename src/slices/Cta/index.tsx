import CTA from "@/app/grupo-reflexivo/sections/CTA";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
const Cta = (props: CtaProps) => {
  return <CTA {...props} />;
};

export default Cta;

