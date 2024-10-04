import * as React from "react";
const SvgClothesTurtleneck = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#clothes-turtleneck_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.5 18.5v-7m13 0v7zm-13 7V22h13v-3.5zm0 0H2v-7C2 10 3 8.25 4.5 7S9 5 9 5h6s3 .75 4.5 2 2.5 3 2.5 4.5v7H5.5M15 5H9V2h6z"
      />
    </g>
    <defs>
      <clipPath id="clothes-turtleneck_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClothesTurtleneck;
