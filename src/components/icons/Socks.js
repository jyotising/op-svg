import * as React from "react";
const SvgSocks = (props) => (
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
      d="M20 9c-1.5 0-4 0-5 2.5s.25 4.75 1.5 6M9 5h11"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 2h9a1 1 0 0 1 1 1v9.144a5.48 5.48 0 0 1-2.168 4.37c-1.821 1.38-4.288 3.24-5.332 3.986-1.75 1.25-5 2.5-7.5 0S3.125 14.722 5 13s4-3.424 4-3.424V3a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgSocks;
