import * as React from "react";
const SvgPear = (props) => (
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
      d="M8.32 6.373a4.04 4.04 0 0 1 7.36 0l1.53 3.377 1.843 3.16a4.94 4.94 0 0 1-.826 6.033l-.594.577a4.007 4.007 0 0 1-5.317.236.5.5 0 0 0-.632 0 4.007 4.007 0 0 1-5.316-.236l-.595-.577a4.94 4.94 0 0 1-.826-6.032L6.79 9.75z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M10.75 2c.333.25 1.05.95 1.25 1.75s.083 1.667 0 2"
    />
    <path
      fill="#333"
      d="M8 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11.5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgPear;
