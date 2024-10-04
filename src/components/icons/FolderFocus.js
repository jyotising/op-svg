import * as React from "react";
const SvgFolderFocus = (props) => (
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
      d="M2.5 4a1 1 0 0 1 1-1h6L12 6h8.5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 10 1.122 2.456 2.682.308-1.99 1.826.537 2.646-2.35-1.328-2.352 1.328.537-2.646-1.99-1.826 2.683-.308z"
    />
  </svg>
);
export default SvgFolderFocus;
