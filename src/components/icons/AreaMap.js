import * as React from "react";
const SvgAreaMap = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#area-map_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9 12-3 4.5-4-2.25V21h20V7.5l-3.5 4-3-2.5-3.5 4z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 14.25V8.5l3.5 3 2.75-4 3 1.5 4.25-4.5 2.75 2.25L22 3v4.75"
      />
    </g>
    <defs>
      <clipPath id="area-map_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAreaMap;
