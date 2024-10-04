import * as React from "react";
const SvgFenceOne = (props) => (
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
      d="M4 2v20M22 6H2M20 22 4 6M4 22 20 6M13.5 22 4 12.5M20 15.5 10.5 6M4 15.5 13 6M10.5 22l9.5-9.5M22 22H2M20 2v20"
    />
  </svg>
);
export default SvgFenceOne;
