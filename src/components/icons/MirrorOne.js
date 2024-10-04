import * as React from "react";
const SvgMirrorOne = (props) => (
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
      d="M12 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18v4M7 22h10"
    />
  </svg>
);
export default SvgMirrorOne;
