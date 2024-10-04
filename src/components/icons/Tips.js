import * as React from "react";
const SvgTips = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#tips_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 10a8 8 0 0 1-5.122 7.467H9.122A8 8 0 1 1 20 10M14.878 17.467l-.34 4.075a.5.5 0 0 1-.498.458H9.96a.5.5 0 0 1-.498-.459l-.34-4.074"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 8.5v3l3-1.5 3 1.5v-3"
      />
    </g>
    <defs>
      <clipPath id="tips_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTips;
