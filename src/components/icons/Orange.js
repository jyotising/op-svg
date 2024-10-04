import * as React from "react";
const SvgOrange = (props) => (
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
      d="M20.5 13c0 4.97-3 9-8.5 9s-8.5-4.03-8.5-9c0-1.84.552-3.551 1.5-4.977C6.612 5.598 8.87 6.5 12 6.5s5.388-.902 7 1.523A8.96 8.96 0 0 1 20.5 13"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13 6.5 1.5-2H13l-1-1-1 1H9.5l1.5 2"
    />
    <path
      fill="#333"
      d="M9 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7.5 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10.5 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgOrange;
