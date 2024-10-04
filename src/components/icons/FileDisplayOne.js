import * as React from "react";
const SvgFileDisplayOne = (props) => (
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
      d="M20 11.5V7l-4.5-5H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h6"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.5 20.5c2.485 0 4.5-3 4.5-3s-2.015-3-4.5-3-4.5 3-4.5 3 2.015 3 4.5 3Z"
    />
    <path fill="#333" d="M16.5 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 2v5h5"
    />
  </svg>
);
export default SvgFileDisplayOne;
