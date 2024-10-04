import * as React from "react";
const SvgChurchOne = (props) => (
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
      d="M12 2v6M10 4h4"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 14h-3a1 1 0 0 0-1 1v7M16.5 14h3a1 1 0 0 1 1 1v7"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M2 22h20" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7.5 11.5 4.5-4 4.5 4V22h-9z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 17v5M10 22h4"
    />
  </svg>
);
export default SvgChurchOne;
