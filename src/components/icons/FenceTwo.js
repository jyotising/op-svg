import * as React from "react";
const SvgFenceTwo = (props) => (
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
      d="M4.5 2v20M8 4.5v14M12 4.5v14M16 4.5v14M21 22H3M21 18.5H3M19.5 2v20M21 4.5H3"
    />
  </svg>
);
export default SvgFenceTwo;
