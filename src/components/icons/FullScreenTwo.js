import * as React from "react";
const SvgFullScreenTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#full-screen-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 3h6v6M9 3H3v6M15 21h6v-6M9 21H3v-6M21 3l-6.5 6.5M9.5 14.5 3 21"
      />
    </g>
    <defs>
      <clipPath id="full-screen-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFullScreenTwo;
