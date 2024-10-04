import * as React from "react";
const SvgThunderstormOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#thunderstorm-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.265 10 8.5 15.75l3.088.442-1.323 5.308L16 14.865l-3.53-.884L15.119 10z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.727 14.997A6.98 6.98 0 0 1 2 9.443C2 5.608 5.053 2.5 8.818 2.5c3.149 0 5.799 2.173 6.583 5.127a4.46 4.46 0 0 1 2.053-.499c2.51 0 4.546 2.073 4.546 4.629A4.63 4.63 0 0 1 19.273 16"
      />
    </g>
    <defs>
      <clipPath id="thunderstorm-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThunderstormOne;
