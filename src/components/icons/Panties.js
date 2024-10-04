import * as React from "react";
const SvgPanties = (props) => (
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
      d="M22 7.5C20.5 6 19.5 3 19.5 3S17 4.75 12 4.75 4.5 3 4.5 3 4 5.5 2 7.5c0 6 8.5 13.5 8.5 13.5h3S22 13.5 22 7.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M22 7.5s-4.5.5-6.5 4-2 9.5-2 9.5M2 7.5s4.5.5 6.5 4 2 9.5 2 9.5"
    />
  </svg>
);
export default SvgPanties;
