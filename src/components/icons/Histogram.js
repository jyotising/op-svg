import * as React from "react";
const SvgHistogram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#histogram_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M2 22h20" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.5 22S6.156 5 12 5s8.5 17 8.5 17M2 2v20"
      />
    </g>
    <defs>
      <clipPath id="histogram_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHistogram;
