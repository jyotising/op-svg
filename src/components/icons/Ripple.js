import * as React from "react";
const SvgRipple = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ripple_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 18s2.5-1.5 5-1.5c3.649 0 6.351 3 10 3 2.5 0 5-1.5 5-1.5M2 12s2.5-1.5 5-1.5c3.649 0 6.351 3 10 3 2.5 0 5-1.5 5-1.5M2 6s2.5-1.5 5-1.5c3.649 0 6.351 3 10 3 2.5 0 5-1.5 5-1.5"
      />
    </g>
    <defs>
      <clipPath id="ripple_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRipple;
