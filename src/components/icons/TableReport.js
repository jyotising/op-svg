import * as React from "react";
const SvgTableReport = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#table-report_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.5 3.5A1.5 1.5 0 0 1 4 2h12a1.5 1.5 0 0 1 1.5 1.5V22H4a1.5 1.5 0 0 1-1.5-1.5zM17.5 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8.5A1.5 1.5 0 0 1 20 22h-2.5z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.5 6h4M5.5 9.5h6"
      />
    </g>
    <defs>
      <clipPath id="table-report_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTableReport;
