import * as React from "react";
const SvgTwoFingers = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#two-fingers_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M6.283 13.592Q5 14.47 5 16.5C5 18.53 7.488 22 9.73 22h5.74c2.196 0 3.53-1.925 3.53-3.47v-6.525a1.5 1.5 0 0 0-1.5-1.5h-.005c-.826 0-1.495.67-1.495 1.495"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M6.99 14.722v-9.22c0-.827.672-1.498 1.5-1.498h.004c.83.002 1.502.676 1.502 1.507v6.785"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.996 12.004V3.508a1.508 1.508 0 0 1 3.016 0v8.496"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 11.858v-1.356a1.5 1.5 0 1 1 3 0v1.5"
      />
    </g>
    <defs>
      <clipPath id="two-fingers_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTwoFingers;
