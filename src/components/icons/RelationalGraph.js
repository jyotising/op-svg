import * as React from "react";
const SvgRelationalGraph = (props) => (
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
      d="M2 17.5h20"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 16c0-2.21-1.903-4-4.25-4S3.5 13.79 3.5 16"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.5 16c0-5.523-3.806-10-8.5-10s-8.5 4.477-8.5 10M20.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M3.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    />
  </svg>
);
export default SvgRelationalGraph;
