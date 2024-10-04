import * as React from "react";
const SvgPaintedScreen = (props) => (
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
      strokeWidth={2}
      d="M20 5H4a1.5 1.5 0 0 0-1.5 1.5v11A1.5 1.5 0 0 0 4 19h16a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20 5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.5 12V8.5"
    />
    <path fill="#333" d="M6.5 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgPaintedScreen;
