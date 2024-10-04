import * as React from "react";
const SvgRectangularVertebra = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#rectangular-vertebra_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 4.5 12 2l6 2.5L22 19l-10 3-10-3zM12 22V7M18 4.5 12 7M6 4.5 12 7M2.5 19l9.5-3M22 19l-10-3"
      />
    </g>
    <defs>
      <clipPath id="rectangular-vertebra_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRectangularVertebra;
