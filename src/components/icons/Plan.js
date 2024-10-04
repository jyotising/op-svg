import * as React from "react";
const SvgPlan = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#plan_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.5 9.5h19v11a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1zM2.5 5a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1v4.5h-19z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8 15.5 3 3 6-6"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M8 2.5v4M16 2.5v4"
      />
    </g>
    <defs>
      <clipPath id="plan_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlan;
