import * as React from "react";
const SvgIntercom = (props) => (
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
      strokeWidth={2}
      d="M6.5 7A1.5 1.5 0 0 1 8 5.5h8A1.5 1.5 0 0 1 17.5 7v5.5l-1 3v5A1.5 1.5 0 0 1 15 22H9a1.5 1.5 0 0 1-1.5-1.5v-5l-1-3z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 5.5V2M14 5.5v-2M14 9.5h-4M13 13h-2"
    />
  </svg>
);
export default SvgIntercom;
