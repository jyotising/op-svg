import * as React from "react";
const SvgPermissions = (props) => (
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
      d="M10 5H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1.25"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M5 11.5h4M5 15.5h12"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6M22 14.21C21.023 12.3 19 11 17 11s-2.996.566-4.025 1.5"
    />
  </svg>
);
export default SvgPermissions;
