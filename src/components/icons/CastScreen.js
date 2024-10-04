import * as React from "react";
const SvgCastScreen = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cast-screen_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.5 19.5a8 8 0 0 0-8-8M6.5 19.5a4 4 0 0 0-4-4"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M2.75 20.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 8.028V4h20v16h-7.614"
      />
    </g>
    <defs>
      <clipPath id="cast-screen_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCastScreen;
