import * as React from "react";
const SvgBowlOne = (props) => (
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
      d="M12 19.5c4.694 0 8.5-3.53 8.5-8.5h-17c0 4.97 3.806 8.5 8.5 8.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 19-1 3h8l-1-3"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M6 5v2M18 5v2M12 2.5V7"
    />
  </svg>
);
export default SvgBowlOne;
