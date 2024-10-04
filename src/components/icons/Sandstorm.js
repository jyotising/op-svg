import * as React from "react";
const SvgSandstorm = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#sandstorm_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 11h16a4 4 0 1 0-4-4M5 14.5H2M13.5 14.5h-3M22 14.5h-3M5 17.5H2M13.5 17.5h-3M22 17.5h-3M8 21H2M22 21h-6"
      />
    </g>
    <defs>
      <clipPath id="sandstorm_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSandstorm;
