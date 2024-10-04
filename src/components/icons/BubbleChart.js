import * as React from "react";
const SvgBubbleChart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bubble-chart_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 11.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M6 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M14.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
      />
    </g>
    <defs>
      <clipPath id="bubble-chart_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBubbleChart;
