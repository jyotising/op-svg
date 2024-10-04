import * as React from "react";
const SvgParachute = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#parachute_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.364 12q1.818-1.818 3.636-1.818T15.636 12q2.122-1.818 3.182-1.818T22 12c0-5.523-4.477-10-10-10S2 6.477 2 12q2.121-1.818 3.182-1.818T8.364 12Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m2 12 10 10-3.636-10M15.636 12 12 22l10-10"
      />
    </g>
    <defs>
      <clipPath id="parachute_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgParachute;
