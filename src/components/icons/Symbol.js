import * as React from "react";
const SvgSymbol = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#symbol_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 20.002h7.002Q4 16.726 4 12c0-4.726 3.508-8 8.004-8S20 7.5 20 12q0 4.5-4.997 8.002H22"
      />
    </g>
    <defs>
      <clipPath id="symbol_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSymbol;
