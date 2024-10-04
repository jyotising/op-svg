import * as React from "react";
const SvgMascara = (props) => (
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
      d="M20 8h-6v14h6zM10 14H4v8h6zM7 2v12"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M10 18H4" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 16v4M4 16v4M9 4.5H5M10 7.5H4M9 10.5H5"
    />
  </svg>
);
export default SvgMascara;
