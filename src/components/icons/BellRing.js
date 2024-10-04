import * as React from "react";
const SvgBellRing = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bell-ring_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 10c0 4.569-2.785 8.487-6.75 10.149M21 10h1V9h-1zM7 17.5 5 22h10l-2-4.5M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 10a5 5 0 0 1 5-5"
      />
    </g>
    <defs>
      <clipPath id="bell-ring_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBellRing;
