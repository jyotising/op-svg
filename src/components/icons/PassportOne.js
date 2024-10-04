import * as React from "react";
const SvgPassportOne = (props) => (
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
      strokeWidth={2}
      d="M6.5 20h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M6.5 6v15a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-12a1 1 0 0 0-1 1Z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M13.5 17.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M17.5 14s-1.5-.25-2.5.5-1.3 2.551-1 3M12 13.5c0 1-1 2-2 2M15.5 10s0 2-1.5 2"
    />
  </svg>
);
export default SvgPassportOne;
