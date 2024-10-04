import * as React from "react";
const SvgBookOne = (props) => (
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
      d="M3.5 18.5v-13a3 3 0 0 1 3-3h11v13h-11c-1.65 0-3 1.342-3 3Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.5 15.5h-11a3 3 0 0 0 0 6h14v-18M7 18.5h10"
    />
  </svg>
);
export default SvgBookOne;
