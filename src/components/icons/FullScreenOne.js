import * as React from "react";
const SvgFullScreenOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#full-screen-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m3 3 5 4.95M3 20.95 8 16M21 20.95 16.05 16M20.95 3 16 7.95M16.5 3H21v4.5M21 16.5V21h-4.5M7.5 21H3v-4.5M3 7.5V3h4.5"
      />
    </g>
    <defs>
      <clipPath id="full-screen-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFullScreenOne;
