import * as React from "react";
const SvgCheckerboard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#checkerboard_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 2h-5A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2h-12M11.5 8.5H22M2 8.5h4.5M17.5 15.5H22M3 15.5h9.5M8.5 10.5V22M15.5 2v11.5M15.5 17.5V22M8.5 2v4.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.5 15.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M10.5 8.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </g>
    <defs>
      <clipPath id="checkerboard_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCheckerboard;
