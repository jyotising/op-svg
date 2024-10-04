import * as React from "react";
const SvgBookshelf = (props) => (
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
      d="M2.5 3h17s2 1 2 3.5-2 3.5-2 3.5h-17s2-1 2-3.5-2-3.5-2-3.5M21.5 14h-17s-2 1-2 3.5 2 3.5 2 3.5h17s-2-1-2-3.5 2-3.5 2-3.5"
    />
  </svg>
);
export default SvgBookshelf;
