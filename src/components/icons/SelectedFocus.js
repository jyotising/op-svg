import * as React from "react";
const SvgSelectedFocus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#selected-focus_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 2H2v4h4zM22 18h-4v4h4zM6 18H2v4h4zM22 2h-4v4h4z"
      />
      <path
        stroke="#333"
        strokeDasharray="0.5 2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 18V6M20 18V6M6 4h12M6 20h12"
      />
    </g>
    <defs>
      <clipPath id="selected-focus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSelectedFocus;
