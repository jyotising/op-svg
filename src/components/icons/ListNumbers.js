import * as React from "react";
const SvgListNumbers = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#list-numbers_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 4.5h11M10 9.5h11M10 14.5h11M10 19.5h11M3 14.5h3V16l-3 3v.5h3M4.5 9.5h1m-2-4 1-1v5zm1 4h-1z"
      />
    </g>
    <defs>
      <clipPath id="list-numbers_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgListNumbers;
