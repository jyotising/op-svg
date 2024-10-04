import * as React from "react";
const SvgDoubleBed = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#double-bed_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 20 6v5.5H4zM3 17.5v2M21 17.5v2"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 9H7a1.5 1.5 0 0 0-1.5 1.5v1h6v-1A1.5 1.5 0 0 0 10 9M17 9h-3a1.5 1.5 0 0 0-1.5 1.5v1h6v-1A1.5 1.5 0 0 0 17 9M2 13a1.5 1.5 0 0 1 1.5-1.5h17A1.5 1.5 0 0 1 22 13v4.5H2z"
      />
    </g>
    <defs>
      <clipPath id="double-bed_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDoubleBed;
