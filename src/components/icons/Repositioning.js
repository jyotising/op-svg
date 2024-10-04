import * as React from "react";
const SvgRepositioning = (props) => (
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
      d="M16.5 11c0 3.5-4.5 6.5-4.5 6.5s-4.5-3-4.5-6.5a4.5 4.5 0 0 1 9 0"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M4.5 7s3.75-5.75 10.25-3.5S21 12.25 21 12.25M21 4v8M19.5 17s-3 5.5-9.75 3.75S3 12 3 12M3 12v8"
    />
  </svg>
);
export default SvgRepositioning;
