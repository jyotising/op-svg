import * as React from "react";
const SvgEmailLock = (props) => (
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
      d="M22 12V4.5H2v15h10"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 4.5 12 12l10-7.5M21.5 16.5h-6v4h6zM20 16.5V15a1.5 1.5 0 1 0-3 0v1.5"
    />
  </svg>
);
export default SvgEmailLock;
