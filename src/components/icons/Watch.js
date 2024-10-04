import * as React from "react";
const SvgWatch = (props) => (
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
      d="M17.478 15.5 15.5 22h-7l-1.978-6.5M6.522 8.5 8.5 2h7l1.978 6.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.5 12a6.495 6.495 0 0 1-6.5 6.5A6.495 6.495 0 0 1 5.5 12 6.495 6.495 0 0 1 12 5.5a6.495 6.495 0 0 1 6.5 6.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8.5V12l2 2"
    />
  </svg>
);
export default SvgWatch;
