import * as React from "react";
const SvgPrinterOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#printer-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 16.5h5a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-5M8 16.5H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 6.5v3h12v-3M8 6.5v-4h8v4M8 14.5v7h8v-7M11 17.5h2M6.5 13.5h11"
      />
    </g>
    <defs>
      <clipPath id="printer-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPrinterOne;
