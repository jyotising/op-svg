import * as React from "react";
const SvgMallBag = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#mall-bag_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 6.3v14.2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6.3z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m21 6.3-2.833-3.8H5.833L3 6.3M15.778 9.6c0 2.098-1.692 3.8-3.778 3.8s-3.778-1.702-3.778-3.8"
      />
    </g>
    <defs>
      <clipPath id="mall-bag_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMallBag;
