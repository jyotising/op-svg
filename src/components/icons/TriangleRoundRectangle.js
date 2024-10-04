import * as React from "react";
const SvgTriangleRoundRectangle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#triangle-round-rectangle_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 14.5H3v7h7zM12 2l5 8.5H7zM18 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
      />
    </g>
    <defs>
      <clipPath id="triangle-round-rectangle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTriangleRoundRectangle;
