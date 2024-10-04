import * as React from "react";
const SvgEscalators = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#escalators_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m17.5 6.5-11 11H2V22h4.5l11-11H22V6.5zM9.5 6.5 14 2M11 2h3v3M7 9l-4.5 4.5M5.5 13.5h-3v-3"
      />
    </g>
    <defs>
      <clipPath id="escalators_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEscalators;
