import * as React from "react";
const SvgPeriod = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#period_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M4 2q3.002 2.503 3.002 5.002C7.002 9.502 5 10.622 4 12s-1.498 2.966-1.498 5.002Q2.502 19.038 4 22M20.002 2Q16.999 4.503 17 7.002c0 2.5 2.002 3.62 3.002 4.998s1.497 2.966 1.497 5.002q0 2.036-1.497 4.998M7.002 14.591q1.891-.18 3.14.54c1.25.723 1.854 1.549 1.858 2.347q.005.8 0 4.522M17.002 14.591q-1.891-.18-3.14.54c-1.25.723-1.854 1.549-1.858 2.347"
      />
    </g>
    <defs>
      <clipPath id="period_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPeriod;
