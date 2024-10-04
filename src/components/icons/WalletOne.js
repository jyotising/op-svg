import * as React from "react";
const SvgWalletOne = (props) => (
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
      d="M20.5 6.5h-17a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.5 10h-9v5.5h9zM21.5 9v7.5M16 6.5c0-2.5-1.75-3-2.5-3H6.25C4.45 3.5 4 4.933 4 5.65v.85"
    />
    <path fill="#333" d="M16.75 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" />
  </svg>
);
export default SvgWalletOne;
