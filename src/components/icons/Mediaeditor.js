import * as React from "react";
const SvgMediaeditor = (props) => (
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
      d="M17.5 16.067V17a1.5 1.5 0 0 1-1.5 1.5H3.5A1.5 1.5 0 0 1 2 17v-1.433L22 6"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.5 7.933V7A1.5 1.5 0 0 0 16 5.5H3.5A1.5 1.5 0 0 0 2 7v1.433L22 18"
    />
  </svg>
);
export default SvgMediaeditor;
