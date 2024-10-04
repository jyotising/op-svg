import * as React from "react";
const SvgDoughnut = (props) => (
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
      strokeWidth={2}
      d="M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 14s1.694-1.48 3-.5C8 15 9 14 9 14M14.5 14.5c.333-.5 2-2.143 3.5-1.5 2 .857 3.5 0 3.5-.5"
    />
  </svg>
);
export default SvgDoughnut;
