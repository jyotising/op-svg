import * as React from "react";
const SvgGroup = (props) => (
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
      d="M6 2H2v4h4zM22 18h-4v4h4zM6 18H2v4h4zM22 2h-4v4h4z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 18V6M20 18V6M6 4h12M6 20h12"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 8h4.8v3.2H16V16h-4.8v-3.2H8z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgGroup;
