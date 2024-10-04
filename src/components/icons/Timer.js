import * as React from "react";
const SvgTimer = (props) => (
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
      d="M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 2h-4M12 2v4M17.5 8 19 6.5M12 14v-3M12 14H9"
    />
  </svg>
);
export default SvgTimer;
