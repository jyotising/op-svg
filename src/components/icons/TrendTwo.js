import * as React from "react";
const SvgTrendTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#trend-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 22h20"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m2 13 4 1v5H2zM10 12l4-2v9h-4zM18 8l4-2v13h-4z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m2 9 4 1 16-8h-5"
      />
    </g>
    <defs>
      <clipPath id="trend-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTrendTwo;
