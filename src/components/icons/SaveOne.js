import * as React from "react";
const SvgSaveOne = (props) => (
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
      d="M19.65 3H4.35A1.35 1.35 0 0 0 3 4.35v15.3c0 .746.604 1.35 1.35 1.35h15.3A1.35 1.35 0 0 0 21 19.65V4.35A1.35 1.35 0 0 0 19.65 3Z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 3v9H7.5V3z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M13 6.5v2M5.499 3h12.5"
    />
  </svg>
);
export default SvgSaveOne;
