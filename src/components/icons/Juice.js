import * as React from "react";
const SvgJuice = (props) => (
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
      d="M7.5 12h9l-.9 10H8.4z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M17 9H7a1.5 1.5 0 1 0 0 3h10a1.5 1.5 0 0 0 0-3ZM12 4a5 5 0 0 0-5 5h10a5 5 0 0 0-5-5Z"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="m14 2-1 2" />
  </svg>
);
export default SvgJuice;
