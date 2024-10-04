import * as React from "react";
const SvgFileWithdrawal = (props) => (
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
      d="M5 22h14a1 1 0 0 0 1-1V7l-4.5-5H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 12.5 8 15l2.5 2.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 15h8v-4M15 2v5h5"
    />
  </svg>
);
export default SvgFileWithdrawal;
