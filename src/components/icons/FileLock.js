import * as React from "react";
const SvgFileLock = (props) => (
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
      d="M15.5 13.5h-7v4h7zM14 13.5v-2c0-.828-.5-2-2-2s-2 1.172-2 2v2M15 2v5h5"
    />
  </svg>
);
export default SvgFileLock;
