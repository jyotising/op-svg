import * as React from "react";
const SvgAbnormal = (props) => (
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
      d="M20 8.199V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8 7h6.5M8 10.5h2.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 17a5 5 0 1 0 10 0 5 5 0 0 0-10 0"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M17 18v1.5" />
    <path fill="#333" d="M17 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgAbnormal;
