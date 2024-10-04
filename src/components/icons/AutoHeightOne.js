import * as React from "react";
const SvgAutoHeightOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M3.5 21V3" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 6.995 11.998 4 15 7M15 17.005 12.002 20 9 17M12 4v16"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M20.5 21V3" />
  </svg>
);
export default SvgAutoHeightOne;
