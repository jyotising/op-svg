import * as React from "react";
const SvgInductionLock = (props) => (
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
      d="M4.5 21V9L2 11l10-8 10 8-2.5-2v12zM12 11v6M15.5 13v2M8.5 13v2"
    />
  </svg>
);
export default SvgInductionLock;
