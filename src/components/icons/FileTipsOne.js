import * as React from "react";
const SvgFileTipsOne = (props) => (
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
      d="M20 11.5V7l-4.5-5H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h6M16.5 13v5"
    />
    <path
      fill="#333"
      fillRule="evenodd"
      d="M16.5 23a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
      clipRule="evenodd"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 2v5h5"
    />
  </svg>
);
export default SvgFileTipsOne;