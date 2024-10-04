import * as React from "react";
const SvgOverallReduction = (props) => (
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
      d="M7.5 7.5h9v9h-9zM5.5 21.5v-3h-3M18.5 21.5v-3h3M5.5 2.5v3h-3M18.5 2.5v3h3"
    />
  </svg>
);
export default SvgOverallReduction;
