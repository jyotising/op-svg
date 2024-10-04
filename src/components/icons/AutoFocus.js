import * as React from "react";
const SvgAutoFocus = (props) => (
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
      d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
    />
    <path fill="#333" d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.5 7s3.75-5.75 10.25-3.5S21 12.25 21 12.25M19.5 17s-3 5.5-9.75 3.75S3 12 3 12M21 4v8M3 12v8"
    />
  </svg>
);
export default SvgAutoFocus;
