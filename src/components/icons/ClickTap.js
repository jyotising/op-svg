import * as React from "react";
const SvgClickTap = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#click-tap_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.5 13V7.5a1.5 1.5 0 1 1 3 0V13"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.5 12.5v3.25a5.75 5.75 0 0 1-5.75 5.75h-.5a5.75 5.75 0 0 1-5.75-5.75V12.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.5 14.5V12a1.5 1.5 0 0 1 3 0v2.5M13.5 14.5V12a1.5 1.5 0 0 1 3 0v2.5M16.5 14.5V12a1.5 1.5 0 0 1 3 0v2.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M14 7.5a5 5 0 0 0-.98-2.973A5 5 0 0 0 9 2.5c-1.648 0-3.11.797-4.02 2.027A5 5 0 0 0 4 7.5"
      />
    </g>
    <defs>
      <clipPath id="click-tap_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClickTap;
