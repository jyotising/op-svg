import * as React from "react";
const SvgMagnet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#magnet_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 5v8a5 5 0 0 0 10 0V5M3 5v8a9 9 0 1 0 18 0V5zM7 2H3v3h4zM17 2h4v3h-4z"
      />
    </g>
    <defs>
      <clipPath id="magnet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMagnet;
