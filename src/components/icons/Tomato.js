import * as React from "react";
const SvgTomato = (props) => (
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
      d="M12 22c5.523 0 10-3.694 10-8.25 0-3.22-2.237-5.9-5.5-7.258l-1.75.758L15 10l-3.25-1-3.25 1V7.25L7 6.492C4.011 7.92 2 10.696 2 13.75 2 18.306 6.477 22 12 22"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m11.75 2 1.904 2.558L18 4.955l-3.169 2.287.919 3.258-4-1.5-4 1.5.919-3.258L5.5 4.955l4.346-.397z"
    />
  </svg>
);
export default SvgTomato;
