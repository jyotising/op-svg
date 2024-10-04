import * as React from "react";
const SvgMicrophone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#microphone_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 6a4 4 0 0 0-8 0v6a4 4 0 0 0 8 0z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 10.5V12a7 7 0 1 0 14 0v-1.5M12 2.5v3M8 8h2.5M13.5 8H16M8 11h2.5M13.5 11H16"
      />
      <path stroke="#333" strokeWidth={2} d="M12 19v3" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 22h8"
      />
    </g>
    <defs>
      <clipPath id="microphone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMicrophone;
