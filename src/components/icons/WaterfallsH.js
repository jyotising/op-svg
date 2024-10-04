import * as React from "react";
const SvgWaterfallsH = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#waterfalls-h_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 3H3v5.5h7zM21 15.5h-7V21h7zM21 3h-7v8.5h7zM10 12.5H3V21h7z"
      />
    </g>
    <defs>
      <clipPath id="waterfalls-h_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWaterfallsH;
