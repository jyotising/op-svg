import * as React from "react";
const SvgBitcoin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bitcoin_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.5 8V6M10 8v4h3.5a2 2 0 1 0 0-4H10m0 0H8zm0 0V6zm0 0h2.5zM12.5 16v2M10 16v-4h4.5a2 2 0 1 1 0 4H10m0 0v2zm0 0H8h4.5zm0 0h2.5z"
      />
    </g>
    <defs>
      <clipPath id="bitcoin_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBitcoin;
