import * as React from "react";
const SvgLuggage = (props) => (
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
      d="M19 7H5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M10 11.5v4" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 20v2M16.5 20v2"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M14 11.5v4" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 2h5M12 2v5"
    />
  </svg>
);
export default SvgLuggage;
