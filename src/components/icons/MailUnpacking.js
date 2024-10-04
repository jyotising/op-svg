import * as React from "react";
const SvgMailUnpacking = (props) => (
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
      d="M22 9v10.91c0 .602-.448 1.09-1 1.09H3c-.552 0-1-.488-1-1.09V9l10 8z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 8.892 12 2l10 6.892"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 9H7v4l5 4 5-4z"
    />
  </svg>
);
export default SvgMailUnpacking;
