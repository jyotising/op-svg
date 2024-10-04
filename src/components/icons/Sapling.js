import * as React from "react";
const SvgSapling = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#sapling_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.518 10.518 15.5 6.536m-3.982 3.982S11.157 6.344 13.5 4s6.503-1.982 6.503-1.982.34 4.14-2.003 6.482c-2.343 2.344-6.482 2.018-6.482 2.018M11.486 15.985 8 12.5m3.486 3.485S11.925 12.421 10 10.5 4.516 9.014 4.516 9.014 4.076 12.578 6 14.5c1.925 1.921 5.486 1.485 5.486 1.485M11.5 2v20"
      />
    </g>
    <defs>
      <clipPath id="sapling_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSapling;
