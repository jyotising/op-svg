import * as React from "react";
const SvgRobot = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#robot_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.5 8.5h-13a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1M16.5 4.5l-2.5 4M7.5 4.5l2.5 4"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M17 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM7 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM14 12h-4a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.5 12H2v5h2.5M19.5 12H22v5h-2.5"
      />
    </g>
    <defs>
      <clipPath id="robot_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRobot;
