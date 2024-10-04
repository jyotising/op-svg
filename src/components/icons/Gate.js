import * as React from "react";
const SvgGate = (props) => (
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
      d="M6.5 5v12.5M17.5 5v12.5"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M4 9h16" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 5v4M19.5 5h-15l-2-3s5.535.5 9.5.5 9.5-.5 9.5-.5zM8 17.5H5V22h3zM19 17.5h-3V22h3z"
    />
  </svg>
);
export default SvgGate;
