import * as React from "react";
const SvgAddSubset = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#add-subset_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 14v3.5h4M9 14h12v7H9v-7M3 6.75v-.5M3 10v-.5M3 3.5V3M16 6.75v-.5M16 10v-.5M16 3.5V3M16 10h-.5M3.5 10H3M3.5 3H3M6.5 3H6M9.75 3h-.5M9.75 10h-.5M13 3h-.5M6.5 10H6M13 10h-.5M16 3h-.5"
      />
    </g>
    <defs>
      <clipPath id="add-subset_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAddSubset;
