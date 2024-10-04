import * as React from "react";
const SvgShareSys = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#share-sys_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.183 20.816A9.97 9.97 0 0 1 2 13.5c0-5.523 4.477-10 10-10s10 4.477 10 10a9.97 9.97 0 0 1-3.183 7.316"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.569 18.255a6.5 6.5 0 1 1 8.862 0"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.955 15.695a3 3 0 1 1 4.09 0"
      />
    </g>
    <defs>
      <clipPath id="share-sys_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShareSys;
