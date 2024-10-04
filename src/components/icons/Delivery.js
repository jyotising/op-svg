import * as React from "react";
const SvgDelivery = (props) => (
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
      d="m10 16.5 3 1s7.5-1.5 8.5-1.5 1 1 0 2-4.5 4-7.5 4-5-1.5-7-1.5H2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 14.5c1-1 3-2.5 5-2.5s6.75 2 7.5 3-1.5 2.5-1.5 2.5M8 9V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.5 4h-5v4.5h5z"
    />
  </svg>
);
export default SvgDelivery;
