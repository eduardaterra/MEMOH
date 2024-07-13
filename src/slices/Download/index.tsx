import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Download from "@/app/grupo-reflexivo-2024/sections/Download";

/**
 * Props for `Download`.
 */
export type DownloadProps = SliceComponentProps<Content.DownloadSlice>;

/**
 * Component for "Download" Slices.
 */
const DownloadSlice = (props: DownloadProps): JSX.Element => {
  return <Download {...props} />;
};

export default DownloadSlice;

