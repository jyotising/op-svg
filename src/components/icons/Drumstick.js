import * as React from "react";
const SvgDrumstick = (props) => (
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
      d="m7.075 16.91-.707 4.95-4.242-4.243z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12.025 3.475-4.95 4.95a6 6 0 1 0 8.485 8.485l4.95-4.95"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.793 10.192c2.343 2.344 5.35 3.135 6.717 1.768s.576-4.374-1.767-6.717-5.351-3.135-6.718-1.768-.575 4.374 1.768 6.717"
    />
    <path
      fill="#333"
      d="M14.323 6.406a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414M17.859 9.942a1 1 0 1 0 1.414-1.414 1 1 0 0 0-1.414 1.414M15.03 9.235a1 1 0 1 0 1.414-1.415 1 1 0 0 0-1.414 1.415"
    />
  </svg>
);
export default SvgDrumstick;
