import * as React from "react";
const SvgAddText = (props) => (
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
      strokeWidth={2}
      d="M2 4h14M14 10.5h8M9 21V4M18 21V10.5"
    />
  </svg>
);
export default SvgAddText;
