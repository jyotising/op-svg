import * as React from "react";
const SvgDiamondRing = (props) => (
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
      d="M12.5 22a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15M9 4l1.5-2h4.027L16 4l-3.5 3z"
    />
  </svg>
);
export default SvgDiamondRing;
