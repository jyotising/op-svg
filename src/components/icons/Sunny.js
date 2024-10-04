import * as React from "react";
const SvgSunny = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#sunny_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.391 12.283a3.391 3.391 0 1 0-3.341-3.974"
      />
      <path
        fill="#333"
        d="M16.5 3.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M21 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M22 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.727 19.997A6.98 6.98 0 0 1 2 14.443C2 10.608 5.053 7.5 8.818 7.5c3.149 0 5.799 2.173 6.583 5.127a4.46 4.46 0 0 1 2.053-.499c2.51 0 4.546 2.073 4.546 4.629A4.63 4.63 0 0 1 19.273 21"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.121 12.379a3 3 0 0 0-4.243 4.243"
      />
    </g>
    <defs>
      <clipPath id="sunny_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSunny;
