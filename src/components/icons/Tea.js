import * as React from "react";
const SvgTea = (props) => (
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
      d="M5.5 9.084c0-.047.037-.084.084-.084h11.832c.047 0 .084.037.084.084V15a6 6 0 0 1-12 0z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M17.5 15a3 3 0 0 0 0-6"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.5 4v1.5M17.5 4v1.5M11.5 2.5v3"
    />
  </svg>
);
export default SvgTea;
