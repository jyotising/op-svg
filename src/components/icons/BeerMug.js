import * as React from "react";
const SvgBeerMug = (props) => (
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
      d="M8 18.62c0 .966.429 3.38 6 3.38 5.572 0 6-2.414 6-3.38V8H8z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.5 11.5v7M15.5 11.5v7"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 8s-1-2.25.5-3.5 3-.5 3-.5.5-2 2.5-2 2.5 2 2.5 2 1.75-.75 3 .5S20 8 20 8M8 9.5H3s.5 5 1 6.5 4 1 4 1"
    />
  </svg>
);
export default SvgBeerMug;
