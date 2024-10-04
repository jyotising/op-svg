import * as React from "react";
const SvgApi = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#api_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.5 11 17 12.5 11.5 7 13 5.5c.75-.75 3.5-2 5.5 0s.75 4.75 0 5.5M21 3l-2.5 2.5M5.5 13 7 11.5l5.5 5.5-1.5 1.5c-.75.75-3.5 2-5.5 0s-.75-4.75 0-5.5M11.5 16l2-2M3 21l2.5-2.5M8 12.5l2-2"
      />
    </g>
    <defs>
      <clipPath id="api_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgApi;
