import * as React from "react";
const SvgHeadset = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#headset_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 15v-2.77C21 7.134 16.97 3 12 3s-9 4.133-9 9.23V15"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 16a2 2 0 0 1 2-2h2v7h-2a2 2 0 0 1-2-2z"
      />
      <path
        fill="#333"
        d="M21 16h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1zM3 16H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 14h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3z"
      />
    </g>
    <defs>
      <clipPath id="headset_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeadset;
