import * as React from "react";
const SvgBrowser = (props) => (
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
      d="M21 9v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5H3z"
    />
    <path
      fill="#333"
      fillRule="evenodd"
      d="M6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBrowser;
