import * as React from "react";
const SvgCommodity = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.89 4.876A1 1 0 0 1 5.884 4h12.234a1 1 0 0 1 .993.876l1.75 14A1 1 0 0 1 19.867 20H4.133a1 1 0 0 1-.992-1.124z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 9s1 2 4.5 2 4.5-2 4.5-2"
    />
  </svg>
);
export default SvgCommodity;
