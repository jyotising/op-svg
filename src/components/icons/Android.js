import * as React from "react";
const SvgAndroid = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#android_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21.95 18H2.05C2.55 12.947 6.814 9 12 9s9.449 3.947 9.95 9Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 10 5 6.5M16.5 10l2-3.5"
      />
      <path
        fill="#333"
        d="M7.5 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16.5 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </g>
    <defs>
      <clipPath id="android_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAndroid;
