import * as React from "react";
const SvgChildrenPyramid = (props) => (
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
      d="M16.5 8.5h-9v4h9zM5 12.5h14v4H5zM2.5 16.5h19v4h-19zM12 8.5v-5M14.5 3.5h-5"
    />
  </svg>
);
export default SvgChildrenPyramid;
