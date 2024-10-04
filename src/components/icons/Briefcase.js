import * as React from "react";
const SvgBriefcase = (props) => (
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
      d="M16 8c0-3.038-1.79-6-4-6S8 4.962 8 8M4.5 8h15l.5 6h-6.5v-1.5h-3V14H4zM4 14l-1 7h18l-1-7"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 12.5h3v3h-3z"
    />
  </svg>
);
export default SvgBriefcase;
