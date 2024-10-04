import * as React from "react";
const SvgFlashPayment = (props) => (
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
      d="M15.5 2H8L5 13.5h4L7 22 20 8h-6z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="m10.5 5.5-1 4"
    />
  </svg>
);
export default SvgFlashPayment;
