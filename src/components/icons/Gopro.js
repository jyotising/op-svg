import * as React from "react";
const SvgGopro = (props) => (
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
      d="M9 3.5H2.5v17H9z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M20 6.5h-6.5A1.5 1.5 0 0 0 12 8v8a1.5 1.5 0 0 0 1.5 1.5H20a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 20 6.5Z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M16.75 14a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h3"
    />
    <path fill="#333" d="M7 8.75a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0" />
  </svg>
);
export default SvgGopro;
