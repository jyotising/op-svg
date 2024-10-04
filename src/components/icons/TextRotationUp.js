import * as React from "react";
const SvgTextRotationUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#text-rotation-up_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.5 8.333v7.334m4 1.833-4-1.833zm0-11-4 1.833zm-4 1.833-2 .917-6 2.75 6 2.75 2 .917zM18.5 21V3l3 3"
      />
    </g>
    <defs>
      <clipPath id="text-rotation-up_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextRotationUp;
