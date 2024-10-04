import * as React from "react";
const SvgCameraFive = (props) => (
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
      d="M12 18.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 14a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 21.5h8M12 18.5v3"
    />
  </svg>
);
export default SvgCameraFive;
