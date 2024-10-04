import * as React from "react";
const SvgBachelorCap = (props) => (
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
      d="M2 6.5 12 4l10 2.5L12 9z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.5 8v4.985S9 14.5 12 14.5s5.5-1.515 5.5-1.515V8M3.5 7v11M5 17H2v3h3z"
    />
  </svg>
);
export default SvgBachelorCap;
