import * as React from "react";
const SvgWater = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#water_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.5 14.5A2.5 2.5 0 0 0 7 12a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0c0 5.523-4.477 10-10 10S2 17.523 2 12a2.5 2.5 0 0 0 2.5 2.5M14 6.5a2 2 0 1 1-4 0C10 5.395 12 2 12 2s2 3.395 2 4.5"
      />
    </g>
    <defs>
      <clipPath id="water_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWater;
