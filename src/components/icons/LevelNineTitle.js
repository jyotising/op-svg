import * as React from "react";
const SvgLevelNineTitle = (props) => (
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
      d="M3 4v16M12 4v16M3.5 12h8"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M18.25 10.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 18c.41 1.097 1.274 2 2.75 2 1.519 0 2.75-1.343 2.75-3v-3.5"
    />
  </svg>
);
export default SvgLevelNineTitle;
