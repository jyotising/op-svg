import * as React from "react";
const SvgShuffle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#shuffle_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 21h6v-6M21 9V3h-6M21 3 3 21M15.75 15.75 17 17l2.5 2.5 1.25 1.25.25.25m-9-9L3 3z"
      />
    </g>
    <defs>
      <clipPath id="shuffle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShuffle;
