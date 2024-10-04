import * as React from "react";
const SvgInvertCamera = (props) => (
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
      d="M4.5 7s3.75-5.75 10.25-3.5S21 12.25 21 12.25M19.5 17s-3 5.5-9.75 3.75S3 12 3 12M21 4v8M3 12v8"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10H7v4h6z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17 14-1-.667v-2.666L17 10z"
    />
  </svg>
);
export default SvgInvertCamera;
