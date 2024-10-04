import * as React from "react";
const SvgWatchOne = (props) => (
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
      strokeWidth={2}
      d="M9.5 7V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4M14.5 17v4a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-4"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 12.5h2M12.5 10.5v2"
    />
  </svg>
);
export default SvgWatchOne;
