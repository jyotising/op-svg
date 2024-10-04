import * as React from "react";
const SvgCoordinateSystem = (props) => (
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
      d="m12 6 7 4v8l-7 4-7-4v-8z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v3M5 10l7 4 7-4M19 18l3 1.5M2 19.5 5 18M12 14v8"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8.5 20 3.5 2 3.5-2m0-12 3.5 2v4zm-7 0L5 10v4z"
    />
  </svg>
);
export default SvgCoordinateSystem;
