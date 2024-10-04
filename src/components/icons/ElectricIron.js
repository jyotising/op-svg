import * as React from "react";
const SvgElectricIron = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#electric-iron_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.5 9.356c0-.197.16-.356.356-.356h6.72C16.16 9 21.5 14.339 21.5 20.924a.076.076 0 0 1-.076.076H2.5zM2.5 9V4h10"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M7.5 15.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2.5 18H21"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.5 10c.667-1 2.7-3.2 4.5-2 1.75 1.166.25 4-.5 5"
      />
    </g>
    <defs>
      <clipPath id="electric-iron_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgElectricIron;
