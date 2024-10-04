import * as React from "react";
const SvgVolkswagen = (props) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.5 7 8 18.5l3-5.5h2l3 5.5L20.5 7"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8 3 3 6.5h2L16 3"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M22 12a9.98 9.98 0 0 0-3.386-7.5A9.96 9.96 0 0 0 12 2a9.96 9.96 0 0 0-6.615 2.5A9.98 9.98 0 0 0 2 12"
    />
  </svg>
);
export default SvgVolkswagen;
