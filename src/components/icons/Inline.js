import * as React from "react";
const SvgInline = (props) => (
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
      d="M18.5 4.5 17 3H4l8.5 9L4 21h13l1.5-1.5M2.5 12h5M16.5 12h5"
    />
  </svg>
);
export default SvgInline;
