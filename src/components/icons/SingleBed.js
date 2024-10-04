import * as React from "react";
const SvgSingleBed = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#single-bed_svg__a)">
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
        d="M14.5 9h-5A1.5 1.5 0 0 0 8 10.5v1h8v-1A1.5 1.5 0 0 0 14.5 9M2 13a1.5 1.5 0 0 1 1.5-1.5h17A1.5 1.5 0 0 1 22 13v4.5H2z"
      />
    </g>
    <defs>
      <clipPath id="single-bed_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSingleBed;
