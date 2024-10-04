import * as React from "react";
const SvgHandleB = (props) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.396 11.5C13.834 11.5 15 10.38 15 9s-1.166-2.5-2.604-2.5H9v5zM13.416 17.5c1.427 0 2.584-1.343 2.584-3s-1.157-3-2.585-3H9v6z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHandleB;
