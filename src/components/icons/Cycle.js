import * as React from "react";
const SvgCycle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cycle_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.5 17.5h-3v3M20.5 20.5h-3v-3M17.5 6.5h3v-3M3.5 3.5h3v3"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.5 3.647A9.99 9.99 0 0 0 2.112 13.5M13.5 21.888Q12.765 22 12 22a9.99 9.99 0 0 1-8.353-4.5M21.888 10.5Q22 11.235 22 12a9.99 9.99 0 0 1-4.5 8.353M10.5 2.112Q11.235 2 12 2a9.99 9.99 0 0 1 8.353 4.5"
      />
    </g>
    <defs>
      <clipPath id="cycle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCycle;
