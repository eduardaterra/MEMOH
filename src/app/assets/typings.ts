import { SVGProps } from "react";
import Email from "./email";

export type SVG = SVGProps<SVGSVGElement & { color?: string }>;

export type SVGElement = typeof Email;
