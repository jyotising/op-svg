import * as React from "react";
const SvgShowerHead = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#shower-head_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.5 10v1h-9v-1c0-1.657 2.015-3 4.5-3s4.5 1.343 4.5 3"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 22V6.25C21 3.903 18.314 2 15 2S9 3.903 9 6.25V7M9 14.5V14M5.085 14.016l-.17.47M2.085 21.516l-.17.47M9 22v-.5M9 18.5v-1M3.671 17.53l-.342.94"
      />
    </g>
    <defs>
      <clipPath id="shower-head_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShowerHead;
