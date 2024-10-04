import * as React from "react";
const SvgClickToFold = (props) => (
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
      d="M13.5 4.5v6h6M10.5 19.5v-6h-6M13.5 10.5 21 3M10.5 13.5 3 21"
    />
  </svg>
);
export default SvgClickToFold;
