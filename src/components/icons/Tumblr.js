import * as React from "react";
const SvgTumblr = (props) => (
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
      d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3Z"
    />
    <path
      fill="#333"
      d="M7.5 11V8.5H10V7l3-1v2.5h2.5V11H13v3.5s0 .75 1 1 2.5-.5 2.5-.5l-1 3H13c-1.75 0-3-1.75-3-3v-4z"
    />
  </svg>
);
export default SvgTumblr;
