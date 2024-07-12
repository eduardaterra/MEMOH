import Steps from "@/app/grupo-reflexivo-2024/sections/Steps";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Steps`.
 */
export type StepsProps = SliceComponentProps<Content.StepsSlice>;

/**
 * Component for "Steps" Slices.
 */
const StepsSlice = (props: StepsProps): JSX.Element => {
  return <Steps {...props} />;
};

export default StepsSlice;

