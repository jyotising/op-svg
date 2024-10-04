import * as React from "react";
const SvgScallion = (props) => (
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
      d="M10 12s1.25-2.25 1.5-4.5-.5-4-.5-4L13.5 2s.5 3 .5 4.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 21.5c-1-.75-1-3.455 1-5s2.093-1.141 4.5-3S17 2 17 2l2.25 1.75-6.095 8.12c-1.492 1.988-1.88 4.656-3.13 6.805C9.051 20.35 8 21 7 21.5s-3 .75-4 0"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.5 15s1.5-1 3.5-2 6.5-1 6.5-1L20 8.5s-4 0-5.5 1.5"
    />
  </svg>
);
export default SvgScallion;
