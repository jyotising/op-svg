import * as React from "react";
const SvgFlightAirflow = (props) => (
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
      strokeWidth={2}
      d="M3 12.5c0-4.97 4.141-9 9.25-9s9.25 4.03 9.25 9"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 17.5 4.468 15s-1.717 1.554-2.29 2.87C1.606 19.185 2.426 20.5 4 20.5h18l-4-2.99z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14.5 17.5-5.5-5H7.5l1 5"
    />
  </svg>
);
export default SvgFlightAirflow;
