import * as React from "react";
const SvgHexagonal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hexagonal_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.5 7h17M3.5 17 12 2M20.5 17 12 2M20.5 17h-17M20.5 7 12 22M3.5 7 12 22M7.75 4.5 3.5 7v10l4.25 2.5L12 22l4.25-2.5L20.5 17V7l-4.25-2.5L12 2z"
      />
    </g>
    <defs>
      <clipPath id="hexagonal_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHexagonal;
