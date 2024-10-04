import * as React from "react";
const SvgSkates = (props) => (
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
      d="M2.5 2.5h13v4h-13zM4.5 18V6.5h9v5c7 0 7 4.5 7 6.5zM21.5 18h-18v3h18z"
    />
  </svg>
);
export default SvgSkates;
