import * as React from "react";
const SvgMicrowaves = (props) => (
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
      d="M2.5 6v10a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-17a1 1 0 0 0-1 1Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 9.5h2M6.5 12.5h11M6 17v2M10 17v2M14 17v2M18 17v2"
    />
    <path fill="#333" d="M7.5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
export default SvgMicrowaves;
