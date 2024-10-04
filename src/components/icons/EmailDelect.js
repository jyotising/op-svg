import * as React from "react";
const SvgEmailDelect = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 4.5 12 12l10-7.5M16 15.5h5l-1 5h-3zM18 15.5l1-2"
    />
  </svg>
);
export default SvgEmailDelect;
