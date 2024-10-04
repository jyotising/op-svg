import * as React from "react";
const SvgBrdigeThree = (props) => (
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
      d="M4 6v13M20 6v13"
    />
    <path stroke="#333" strokeWidth={2} d="M4 19s4-5.5 8-5.5 8 5.5 8 5.5" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 13.5h20M2 9.5h20"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 7.5v6M8 9.5v4M16 9.5v4"
    />
  </svg>
);
export default SvgBrdigeThree;
