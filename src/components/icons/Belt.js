import * as React from "react";
const SvgBelt = (props) => (
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
      d="M5.283 15.182 2.1 18.364 5.636 21.9l3.182-3.182M10.94 9.525 18.364 2.1 21.9 5.636l-7.425 7.425"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.93 14.828a1 1 0 0 1 0-1.414l4.242-4.242a1 1 0 0 1 1.414 0l4.243 4.242a1 1 0 0 1 0 1.414l-4.243 4.243a1 1 0 0 1-1.414 0zM12.707 11.293l-3.535 3.535M15.89 4.575l3.535 3.536M13.414 7.05l3.536 3.536M7.758 10.586l5.657 5.657"
    />
  </svg>
);
export default SvgBelt;
