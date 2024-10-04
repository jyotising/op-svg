import * as React from "react";
const SvgTwoSemicircles = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#two-semicircles_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 12.5c0-5.523-4.477-10-10-10S2 6.977 2 12.5zM7 16a5 5 0 0 0 10 0z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="two-semicircles_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTwoSemicircles;
