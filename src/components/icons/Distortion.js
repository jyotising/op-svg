import * as React from "react";
const SvgDistortion = (props) => (
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
      d="M22 4H2v16h20z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 9.5s4.5-3 10 0 10 0 10 0M2 14.5s4.5-3 10 0 10 0 10 0"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 4s3 4 0 8 0 8 0 8M8.5 4s3 4 0 8 0 8 0 8"
    />
  </svg>
);
export default SvgDistortion;
