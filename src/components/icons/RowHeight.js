import * as React from "react";
const SvgRowHeight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#row-height_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8 17.5-3 3-3-3M8 6.5l-3-3-3 3M5 3.5v17M22 4.5H11M18 9.5h-7M22 14.5H11M18 19.5h-7"
      />
    </g>
    <defs>
      <clipPath id="row-height_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRowHeight;
