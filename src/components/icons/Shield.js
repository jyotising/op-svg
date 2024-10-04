import * as React from "react";
const SvgShield = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#shield_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 4.128 12.004 1.5 21 4.128v5.389A13.16 13.16 0 0 1 12.001 22 13.16 13.16 0 0 1 3 9.514z"
      />
    </g>
    <defs>
      <clipPath id="shield_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShield;
