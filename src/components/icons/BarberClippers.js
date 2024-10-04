import * as React from "react";
const SvgBarberClippers = (props) => (
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
      d="M5 4h14v4.5L16.5 12v6s0 4-4.5 4-4.5-4-4.5-4v-6L5 8.5zM7.5 2v3M10.5 2v3M13.5 2v3"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.5 15.5a1.5 1.5 0 0 0-3 0v2a1.5 1.5 0 0 0 3 0zM5 8.5h14M16.5 2v3"
    />
  </svg>
);
export default SvgBarberClippers;
