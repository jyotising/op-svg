import * as React from "react";
const SvgDocumentFolder = (props) => (
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
      d="M16 3h-5v18h5zM21 3h-5v18h5zM5 3l4 .5L7.25 21 3 20.5z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.5 9V7.5M13.5 9V7.5"
    />
  </svg>
);
export default SvgDocumentFolder;
