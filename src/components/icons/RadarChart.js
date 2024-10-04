import * as React from "react";
const SvgRadarChart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#radar-chart_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 1.5 10.937 7.946L19 22.5H5L1.063 9.446z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m19 22.5-3.5-4M5 22.5l3.5-4M1 9.5 6 11M23 9.5 18 11M12 1.5v5"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 6.5 3.004 2.285L18 11l-2.5 7.5h-7L6 11l2.996-2.215zM3.797 7.46 1.063 9.447l.984 3.263M4.016 19.236 5 22.5h3.5M15.5 22.5H19l.984-3.264M20.203 7.46l2.734 1.987-.984 3.263M14.734 3.487 12 1.5 9.266 3.487"
      />
    </g>
    <defs>
      <clipPath id="radar-chart_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRadarChart;
