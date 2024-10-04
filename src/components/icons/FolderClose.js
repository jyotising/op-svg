import * as React from "react";
const SvgFolderClose = (props) => (
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
      d="M2.5 4a1 1 0 0 1 1-1h6L12 6h8.5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1zM21.5 11h-19"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.5 8v6M21.5 8v6"
    />
  </svg>
);
export default SvgFolderClose;