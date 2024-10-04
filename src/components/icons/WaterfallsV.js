import * as React from "react";
const SvgWaterfallsV = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#waterfalls-v_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.5 10V3H3v7zM21 21v-7h-8.5v7zM15.5 3v7H21V3zM3 14v7h5.5v-7z"
      />
    </g>
    <defs>
      <clipPath id="waterfalls-v_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWaterfallsV;
