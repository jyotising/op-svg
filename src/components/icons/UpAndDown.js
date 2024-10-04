import * as React from "react";
const SvgUpAndDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#up-and-down_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18v4h16V6h-4v4h-4v4h-4v4zM9 6.5 13.5 2M10.5 2h3v3M5 13.5H2v-3M6.5 9 2 13.5"
      />
    </g>
    <defs>
      <clipPath id="up-and-down_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUpAndDown;
