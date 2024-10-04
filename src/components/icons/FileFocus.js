import * as React from "react";
const SvgFileFocus = (props) => (
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
      d="M5 22h14a1 1 0 0 0 1-1V7l-4.5-5H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 9.5 1.262 2.763 3.018.346-2.239 2.054.604 2.978L12 16.147 9.355 17.64l.604-2.978L7.72 12.61l3.018-.346zM15 2v5h5"
    />
  </svg>
);
export default SvgFileFocus;
