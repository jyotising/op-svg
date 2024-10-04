import * as React from "react";
const SvgBabyBottle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#baby-bottle_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 10H6v12h12zM13 18h5M13 14h5M4 10h16M6 7h4.2V3.8c0-.6.6-1.8 1.8-1.8s1.8 1.2 1.8 1.8V7H18"
      />
    </g>
    <defs>
      <clipPath id="baby-bottle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBabyBottle;
