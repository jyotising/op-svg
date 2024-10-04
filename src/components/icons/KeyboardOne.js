import * as React from "react";
const SvgKeyboardOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#keyboard-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 9H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1Z"
      />
      <path
        fill="#333"
        d="M7 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2M5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M14 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 18h7M16.5 9V6.563a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 0 .5-.5V3"
      />
    </g>
    <defs>
      <clipPath id="keyboard-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKeyboardOne;
