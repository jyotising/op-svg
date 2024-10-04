import * as React from "react";
const SvgFileProtection = (props) => (
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
      d="M5 22h14a1 1 0 0 0 1-1V7l-4.5-5H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 11.6c0-.533 3.5-1.6 3.5-1.6s3.5 1.067 3.5 1.6c0 4.267-3.5 6.4-3.5 6.4s-3.5-2.133-3.5-6.4M15 2v5h5"
    />
  </svg>
);
export default SvgFileProtection;
