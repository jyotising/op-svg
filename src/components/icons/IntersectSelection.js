import * as React from "react";
const SvgIntersectSelection = (props) => (
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
      d="M20.5 8H9a1 1 0 0 0-1 1v11.5a1 1 0 0 0 1 1h11.5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 2.5H3.5a1 1 0 0 0-1 1V15a1 1 0 0 0 1 1H15a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1M13.5 8 8 13.5M16 10.5 10.5 16"
    />
  </svg>
);
export default SvgIntersectSelection;
