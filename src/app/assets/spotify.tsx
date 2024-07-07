import { SVG } from "./typings";

export default function Spotify({ color = "white", ...props }: SVG) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 12.069C8.6 11.699 9.776 11.5 11 11.5C13.024 11.5 14.92 12.047 16.549 13M18 10C16.15 8.738 13.912 8 11.5 8C9.903 8 8.382 8.324 7 8.908M15.129 16C13.1244 14.9697 10.8073 14.7254 8.632 15.315"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

