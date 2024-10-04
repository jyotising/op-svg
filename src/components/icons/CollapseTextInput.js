import * as React from "react";
const SvgCollapseTextInput = (props) => (
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
      d="M22 10h-8V2M2 14h8v8"
    />
  </svg>
);
export default SvgCollapseTextInput;
