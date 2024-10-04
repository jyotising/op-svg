import * as React from "react";
const SvgMitsubishi = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 9.5 12 15l3.5-5.5L12 4zM15.333 20 12 15h6.667L22 20zM8.667 20 12 15H5.333L2 20z"
    />
  </svg>
);
export default SvgMitsubishi;
