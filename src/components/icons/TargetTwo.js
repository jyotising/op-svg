import * as React from "react";
const SvgTargetTwo = (props) => (
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
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M12 20.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 12 3.5 8.5 8.5 0 0 0 3.5 12a8.5 8.5 0 0 0 8.5 8.5Z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M12 16c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M2 12h20M12 2v20"
    />
  </svg>
);
export default SvgTargetTwo;
