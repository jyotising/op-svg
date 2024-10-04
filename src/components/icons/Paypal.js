import * as React from "react";
const SvgPaypal = (props) => (
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
      d="M16.516 14c2.984 0 4.984-1.25 4.984-4s-2-4-4.984-4H11L8.5 21.5H13l1-7.5z"
      clipRule="evenodd"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 18H5L7.5 2.5h5.516C16 2.5 18 3.75 18 6.5s-2 4-4.984 4H10.5"
    />
  </svg>
);
export default SvgPaypal;
