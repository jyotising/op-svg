import * as React from "react";
const SvgBridgeTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#333" strokeWidth={2} d="M4 6.5s3 5 8 5 8-5 8-5" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 5v14M20 5v14"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M2 15.25s6.094-.299 10-.25c3.91.049 10 .5 10 .5M8 10.5V15M12 11.5V15M16 10.5V15M4 6.5 2 9M22 9l-2-2.5"
    />
  </svg>
);
export default SvgBridgeTwo;
