import * as React from "react";
const SvgGameConsole = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#game-console_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M23.889 0H0v23.889h23.889z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M18 2H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 17h4M10 15v4"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 5H8v4.5h8z"
      />
      <path
        fill="#333"
        d="M15.5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15.5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </g>
    <defs>
      <clipPath id="game-console_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGameConsole;
