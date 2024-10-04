import * as React from "react";
const SvgCredit = (props) => (
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
      d="M19 7.5v-4H5v4M21.5 13.5v-6h-19v13h19"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.5 13.5 12 17h9.5M13 10.5h-2M8 10.5H6"
    />
  </svg>
);
export default SvgCredit;
