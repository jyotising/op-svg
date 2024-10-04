import * as React from "react";
const SvgGlasses = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#glasses_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M18 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.5 17V5.442c0-.696 0-1.044.189-1.306s.519-.372 1.179-.592L5.5 3M21.5 17V5.442c0-.696 0-1.044-.189-1.306s-.518-.372-1.178-.592L18.5 3M14.5 17a2.5 2.5 0 0 0-5 0"
      />
    </g>
    <defs>
      <clipPath id="glasses_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGlasses;
