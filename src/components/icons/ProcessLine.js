import * as React from "react";
const SvgProcessLine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#process-line_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 20h5M2 16h10M11 20h2.5M18.5 20H22M17.5 16H22M16 12h6M8 12h3M2 12h1M2 8h2M2 4h3.5l4 4H22M11 4h11"
      />
    </g>
    <defs>
      <clipPath id="process-line_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgProcessLine;
