import * as React from "react";
const SvgSolidStateDisk = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#solid-state-disk_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 14.5H2V21h20z"
      />
      <path
        fill="#333"
        d="M17.75 19a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 14.5 4.52 2.498h14.99l2.49 12"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M5 17.75h8.5"
      />
    </g>
    <defs>
      <clipPath id="solid-state-disk_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSolidStateDisk;
