import * as React from "react";
const SvgSpikedshoes = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#spikedshoes_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={2}
        d="M22 3h-8v4h8zM22 7v11c0 .555-.445 1-1 1H4a2 2 0 0 1-2-2v-3c0-2.21 1.79-4 4-4h8V7zM7 13v-3M10.5 13v-3M7.5 21v-2M4 21v-2M11 21v-2M17 21v-2M20.5 21v-2M11.5 10H6"
      />
    </g>
    <defs>
      <clipPath id="spikedshoes_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSpikedshoes;
