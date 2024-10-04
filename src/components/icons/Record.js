import * as React from "react";
const SvgRecord = (props) => (
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
      d="M20.5 9h-17a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1M4 6h16M7.5 3h9M13 12v3"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 16.375c0-.76.645-1.375 1.44-1.375H13v1.625c0 .76-.645 1.375-1.44 1.375h-1.12C9.645 18 9 17.385 9 16.625z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 12.5 13 12"
    />
  </svg>
);
export default SvgRecord;
