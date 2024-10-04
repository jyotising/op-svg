import * as React from "react";
const SvgLipGloss = (props) => (
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
      d="M12 6H4s0 2 .5 7S6 22 6 22h4s1-4 1.5-9 .5-7 .5-7M21 17h-7s0 1 .5 2.5 1.25 2.5 1.25 2.5h3.5s.75-1 1.25-2.5.5-2.5.5-2.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M17.5 17V6.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 3.5h4l-1 3h-2zM10.5 3h-5v3h5z"
    />
  </svg>
);
export default SvgLipGloss;
