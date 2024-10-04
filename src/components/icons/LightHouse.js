import * as React from "react";
const SvgLightHouse = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 22h18M8.5 10h7"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 10h5L16 22H8z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.5 4.5 1 5.5h3l1-5.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16 6-1.5-1.5L12 2 9.5 4.5 8 6M18.5 3.5 20 2M5.5 3.5 4 2M18.5 9.5 20 11M5.5 9.5 4 11M19 6.5h2M5 6.5H3M9 14h6M8.5 18h7"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.5 10 16 22M9.5 10 8 22"
    />
  </svg>
);
export default SvgLightHouse;
