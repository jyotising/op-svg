import * as React from "react";
const SvgPublicToilet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#public-toilet_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M16.5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M5 10h5L9 21H6zM14 10h5l1 5.5h-1.5L18 21h-3l-.5-5.5H13z"
      />
    </g>
    <defs>
      <clipPath id="public-toilet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPublicToilet;
