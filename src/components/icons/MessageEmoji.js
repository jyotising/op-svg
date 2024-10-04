import * as React from "react";
const SvgMessageEmoji = (props) => (
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
      d="M22 3.5H2v15h3.5V21l5-2.5H22zM15.5 8v.5M8.5 8v.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 12.5s-1 2-3.5 2-3.5-2-3.5-2"
    />
  </svg>
);
export default SvgMessageEmoji;
