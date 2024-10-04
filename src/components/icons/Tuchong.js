import * as React from "react";
const SvgTuchong = (props) => (
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
      d="M2.5 19.5h19V14h-3v2.5h-13v-9h6v-3h-9z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.5 8v3c-4 0-7-2.5-7-6.5h3c0 2 1 3.5 4 3.5"
    />
  </svg>
);
export default SvgTuchong;
