import * as React from "react";
const SvgFireworks = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#fireworks_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 21 7.337 8.632l8.163 8.387z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.5 9.5 14 7q2-2 .5-3.5M14.5 12.5 17 10q2.5-2.5 5 0"
      />
      <path
        fill="#333"
        d="M10 3.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M21 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2M21 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M19.5 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </g>
    <defs>
      <clipPath id="fireworks_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFireworks;
