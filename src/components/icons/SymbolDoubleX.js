import * as React from "react";
const SvgSymbolDoubleX = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#symbol-double-x_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m5 2 7 7 7-7M5 22l7-7 7 7M21.5 5l-7 7 7 7M2 5l7 7-7 7"
      />
    </g>
    <defs>
      <clipPath id="symbol-double-x_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSymbolDoubleX;
