import * as React from "react";
const SvgFireTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#fire-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 10.5a6.5 6.5 0 0 1-13 0c0-3.59 2.5-5 3.5-8.5 4 1.75 4 7 4 7s1-3 4-3.75C16.75 8 18 8.967 18 10.5M3.5 18l16 4M3.5 22l16-4"
      />
    </g>
    <defs>
      <clipPath id="fire-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFireTwo;
