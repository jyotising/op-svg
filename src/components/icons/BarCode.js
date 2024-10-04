import * as React from "react";
const SvgBarCode = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bar-code_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 10h20M3 3v4M3 12.998V19M10.2 3v4M10.2 13v8M17.4 3v4M21 3v4M17.4 13v4M6.6 3v4M6.6 13v4M13.8 3v4M13.8 13v4M21 13v6"
      />
    </g>
    <defs>
      <clipPath id="bar-code_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBarCode;
