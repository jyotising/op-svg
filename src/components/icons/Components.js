import * as React from "react";
const SvgComponents = (props) => (
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
      d="M8.5 5.5 12 2l3.5 3.5L12 9zM15 12.5 18.5 9l3.5 3.5-3.5 3.5zM8.5 18.5 12 15l3.5 3.5L12 22zM2 12l3.5-3.5L9 12l-3.5 3.5z"
    />
  </svg>
);
export default SvgComponents;
