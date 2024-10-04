import * as React from "react";
const SvgExpandLeftAndRight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#expand-left-and-right_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3v18M21 3v18zM8 10l-2 2 2 2zm8 0 2 2-2 2zm-4-7v18z"
      />
    </g>
    <defs>
      <clipPath id="expand-left-and-right_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgExpandLeftAndRight;
