import * as React from "react";
const SvgDiapersOne = (props) => (
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
      d="M21 3H3v9c0 2.25 1.25 9.25 9 9.25S21 14 21 12zM3 7h5M16 7h5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12c-5 0-8.5 2.4-8.5 9M3 12c5 0 8.5 2.4 8.5 9"
    />
  </svg>
);
export default SvgDiapersOne;
