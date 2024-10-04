import * as React from "react";
const SvgBooth = (props) => (
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
      d="M2 2.5h20v4l-.7.42a3.5 3.5 0 0 1-3.6 0L17 6.5l-.7.42a3.5 3.5 0 0 1-3.6 0L12 6.5l-.7.42a3.5 3.5 0 0 1-3.6 0L7 6.5l-.7.42a3.5 3.5 0 0 1-3.6 0L2 6.5zM21 12.5H3v9h18zM4.5 8v4.5M19.5 8v4.5"
    />
  </svg>
);
export default SvgBooth;
