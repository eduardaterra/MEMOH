import FAQ from "@/app/grupo-reflexivo-2024/sections/FAQ";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>;

/**
 * Component for "Faq" Slices.
 */
const Faq = (props: FaqProps): JSX.Element => {
  return <FAQ {...props} />;
};

export default Faq;

