import * as React from "react";
const SvgSleaves = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#sleaves_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.5 21.5S9 22 5.5 18 2 2 2 2s12-.5 16 2.5S21 16 21 16"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 22s-5.59-4.224-9-8-5-7.5-5-7.5M13 14l.5-6.5M13 14l-5-.5"
      />
    </g>
    <defs>
      <clipPath id="sleaves_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSleaves;
