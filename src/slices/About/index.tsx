import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import AboutSection from "@/app/grupo-reflexivo/sections/About";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = (props: AboutProps): JSX.Element => {
  return <AboutSection {...props} />;
};

export default About;

