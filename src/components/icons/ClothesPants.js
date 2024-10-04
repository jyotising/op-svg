import * as React from "react";
const SvgClothesPants = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#clothes-pants_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.5 22H21L19 2H5L3 22h4.5L12 9.5zM12 2v2.75"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 2s0 3-1 4-3.05 1.5-3.05 1.5M15.5 2s0 3 1 4 3.05 1.5 3.05 1.5"
      />
    </g>
    <defs>
      <clipPath id="clothes-pants_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClothesPants;
