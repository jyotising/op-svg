import * as React from "react";
const SvgError = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#error_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5.5 5.5 3 12 9.5 18.5 3 21 5.5 14.5 12l6.5 6.5-2.5 2.5-6.5-6.5L5.5 21 3 18.5 9.5 12z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="error_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgError;
