import * as React from "react";
const SvgAnchorSqure = (props) => (
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
      d="M21 19c0-4.97-4.03-10-9-10s-9 5.03-9 10M10 7H5M19 7h-5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 5h-4v4h4zM22 5.5h-3v3h3zM5 5.5H2v3h3z"
    />
  </svg>
);
export default SvgAnchorSqure;
