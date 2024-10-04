import * as React from "react";
const SvgCamp = (props) => (
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
      d="M22 17.5h-2L12 3.25 4 17.5H2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15.5c-1.38 0-2.5 1.79-2.5 4v1h5v-1c0-2.21-1.12-4-2.5-4M2 20.5h20M7.5 11.5s2.5-2 4.5-2 4.5 2 4.5 2M20 3l-1 1.5L20 6M20 3l1 1.5L20 6M3.5 8.5l-.5 1 .5 1M3.5 8.5l.5 1-.5 1"
    />
  </svg>
);
export default SvgCamp;
