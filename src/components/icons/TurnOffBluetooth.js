import * as React from "react";
const SvgTurnOffBluetooth = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#turn-off-bluetooth_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.336 5.889V2l7.292 5.556-3.59 2.222zm5.914 12.098L10.338 22v-7.186z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m2 6.25 20 11.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m3.722 17 6.615-2.187"
      />
    </g>
    <defs>
      <clipPath id="turn-off-bluetooth_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTurnOffBluetooth;
