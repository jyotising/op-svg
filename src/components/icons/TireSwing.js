import * as React from "react";
const SvgTireSwing = (props) => (
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
      d="M2 2s3 3 10 3 10-3 10-3M12 5v3M15 22c2.21 0 4-3.134 4-7s-1.79-7-4-7-4 3.134-4 7 1.79 7 4 7"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 18c.828 0 1.5-1.343 1.5-3s-.672-3-1.5-3-1.5 1.343-1.5 3 .672 3 1.5 3M9 22c-2.21 0-4-3.134-4-7s1.79-7 4-7M15 8H9M15 22H9M11 14.5H5M11.5 11H6M11.5 18.5H6"
    />
  </svg>
);
export default SvgTireSwing;
