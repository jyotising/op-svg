import * as React from "react";
const SvgSpeed = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#speed_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M21.931 0H2.069v19.862h19.862z" />
      <path fill="#fff" fillOpacity={0.01} d="M21.931 0H2.069v24h19.862z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.655}
        d="M16.148 2.768a8.276 8.276 0 1 0 3.03 3.04"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={1.655}
        d="M15.29 6.642s-1.402 3.742-2.048 4.389A1.655 1.655 0 0 1 10.9 8.69c.646-.647 4.389-2.048 4.389-2.048Z"
      />
    </g>
    <defs>
      <clipPath id="speed_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpeed;
