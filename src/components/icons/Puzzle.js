import * as React from "react";
const SvgPuzzle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#puzzle_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 12V6h4.5V5a3 3 0 0 1 6 0v1H17v6h2a3 3 0 1 1 0 6h-2v4H2v-4h2a3 3 0 1 0 0-6z"
      />
    </g>
    <defs>
      <clipPath id="puzzle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPuzzle;
