import * as React from "react";
const SvgSinusoid = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#sinusoid_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 12S3 2 7 2s4.5 7.5 5 10 2 10 5.5 10S22 12 22 12M5.5 12h3M15.5 12h3"
      />
    </g>
    <defs>
      <clipPath id="sinusoid_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSinusoid;
