import * as React from "react";
const SvgWaterRate = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#water-rate_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22c4.418 0 8-3.256 8-7.273Q20 8.817 12 2 4 8.818 4 14.727C4 18.744 7.582 22 12 22Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.429 9.5 12 12.184 14.571 9.5M9 13.078h6M9 15.764h6M12 13.078V18"
      />
    </g>
    <defs>
      <clipPath id="water-rate_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWaterRate;
