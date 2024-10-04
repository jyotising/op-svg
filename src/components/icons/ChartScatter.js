import * as React from "react";
const SvgChartScatter = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#chart-scatter_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3v18h18"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4M18.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M7.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M16.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="chart-scatter_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgChartScatter;
