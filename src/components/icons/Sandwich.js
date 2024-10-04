import * as React from "react";
const SvgSandwich = (props) => (
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
      d="M21 18v-7H3v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2M3 15h18M3 13v4M21 13v4M3.033 11H21c0-1.008-5.903-5.29-8.983-7.306s-5.647.756-7.7 3.275C2.674 8.985 3.033 9.992 3.033 11"
    />
  </svg>
);
export default SvgSandwich;
