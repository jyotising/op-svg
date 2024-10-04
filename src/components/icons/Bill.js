import * as React from "react";
const SvgBill = (props) => (
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
      d="M5 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v19l-3.5-2.5L12 22l-3.5-2.5L5 22zM9 11h6M9 15h6M9 7h6"
    />
  </svg>
);
export default SvgBill;
