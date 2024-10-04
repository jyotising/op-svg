import * as React from "react";
const SvgChinesePavilion = (props) => (
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
      strokeWidth={2}
      d="M7.5 6h9s1.682 1.506 3 2c.932.35 2.5.5 2.5.5s-.908.324-1.5.5c-.772.229-2 .5-2 .5h-13s-1.228-.271-2-.5C2.908 8.824 2 8.5 2 8.5s1.568-.15 2.5-.5c1.318-.494 3-2 3-2Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 6 3-4 3 4z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M5.5 9.5V19M18.5 9.5V19"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 19H3v3h18z"
    />
  </svg>
);
export default SvgChinesePavilion;
