import * as React from "react";
const SvgMute = (props) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.5 7v10c-1.925 0-3.355-2.545-3.355-2.545H9.05a.553.553 0 0 1-.55-.555v-3.841c0-.307.246-.556.55-.556h2.095S12.575 7 14.5 7Z"
    />
  </svg>
);
export default SvgMute;
