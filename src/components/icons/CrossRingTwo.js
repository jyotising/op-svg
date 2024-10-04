import * as React from "react";
const SvgCrossRingTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cross-ring-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.727 13.222C8.818 14.112 7.91 15 6.091 15S2 13.667 2 11s2.273-4 4.09-4c2.728 0 4.092 1.778 5.91 4s3.182 4 5.91 4c1.817 0 4.09-1.333 4.09-4s-2.273-4-4.09-4c-1.82 0-3.183 1.333-3.637 1.778"
      />
    </g>
    <defs>
      <clipPath id="cross-ring-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCrossRingTwo;
