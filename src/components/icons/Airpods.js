import * as React from "react";
const SvgAirpods = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#airpods_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 2a4.5 4.5 0 0 0-4.5 4.5V22h3V10.744a4.5 4.5 0 0 0 5.5-2.18V4.436A4.5 4.5 0 0 0 18 2M6 2a4.5 4.5 0 0 1 4.5 4.5V22h-3V10.744A4.5 4.5 0 0 1 2 8.564V4.436A4.5 4.5 0 0 1 6 2M7.5 6.5H7M16.5 6.5h.5"
      />
    </g>
    <defs>
      <clipPath id="airpods_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAirpods;
