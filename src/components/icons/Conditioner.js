import * as React from "react";
const SvgConditioner = (props) => (
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
      d="M20 12H4v10h16zM18.5 12V8.5h-13V12M8.5 8.5Q10 6.875 10 2c1.5 0 5 2.708 5 6.366"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 15.5H8v3h8z"
    />
  </svg>
);
export default SvgConditioner;
