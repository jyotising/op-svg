import * as React from "react";
const SvgTransport = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.5 6h-11A1.5 1.5 0 0 0 8 7.5v6A1.5 1.5 0 0 0 9.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 20.5 6Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 9v3M18 9v3"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 6V3h-6v3M22 18H6a1 1 0 0 1-1-1V5.5a1 1 0 0 0-1-1H2M9.5 21A1.5 1.5 0 0 1 8 19.5V18h3v1.5A1.5 1.5 0 0 1 9.5 21M18.5 21a1.5 1.5 0 0 1-1.5-1.5V18h3v1.5a1.5 1.5 0 0 1-1.5 1.5"
    />
  </svg>
);
export default SvgTransport;
