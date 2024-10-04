import * as React from "react";
const SvgSlippers = (props) => (
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
      d="M2 14.5h20v3H2zM11.765 6.5c-1.75 2-1.75 6-1.75 8h10v-4.25S14 7.5 11.765 6.5"
    />
  </svg>
);
export default SvgSlippers;
