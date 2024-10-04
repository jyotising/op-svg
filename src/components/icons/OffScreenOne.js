import * as React from "react";
const SvgOffScreenOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#off-screen-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m3 3 5 4.95M3 20.95 8 16M21 20.95 16.05 16M20.95 3 16 7.95M16 3.5V8h4.5M8 3.5V8H3.5M8 20.5V16H3.5M16 20.5V16h4.45"
      />
    </g>
    <defs>
      <clipPath id="off-screen-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgOffScreenOne;
