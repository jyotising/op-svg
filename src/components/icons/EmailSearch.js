import * as React from "react";
const SvgEmailSearch = (props) => (
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
      d="M22 12V4.5H2v15h10"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M18 19.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m20 18.5 2 1.5M2 4.5 12 12l10-7.5"
    />
  </svg>
);
export default SvgEmailSearch;
