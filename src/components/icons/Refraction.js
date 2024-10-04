import * as React from "react";
const SvgRefraction = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#refraction_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 4.5 8.227 14.25H3.773z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 4.5 8.227 14.25H3.773zM2 11l7.75-2.5M14 8l8-1.5M15 9.75l7 .75M16.35 12 22 14.5"
      />
    </g>
    <defs>
      <clipPath id="refraction_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRefraction;
