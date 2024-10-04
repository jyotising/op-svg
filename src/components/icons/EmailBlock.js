import * as React from "react";
const SvgEmailBlock = (props) => (
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
      d="M22 17.5v-13H2v14h11"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M17.5 22a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18.5 16.5-2 2M2 4.5 12 11l10-6.5"
    />
  </svg>
);
export default SvgEmailBlock;
