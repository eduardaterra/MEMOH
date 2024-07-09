import Statements from "@/app/grupo-reflexivo/sections/Statements";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Statement`.
 */
export type StatementProps = SliceComponentProps<Content.StatementSlice>;

/**
 * Component for "Statement" Slices.
 */
const Statement = (props: StatementProps): JSX.Element => {
  return <Statements {...props} />;
};

export default Statement;

