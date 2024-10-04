import * as React from "react";
const SvgListAlphabet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#list-alphabet_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 4.5h11M10 9.5h11M10 14.5h11M10 19.5h11M3 14.5h3l-3 5h3M5.85 8h-2.7M3 9.5 3.15 8zm3 0L5.85 8zM5.85 8 5.5 4.5h-2L3.15 8z"
      />
    </g>
    <defs>
      <clipPath id="list-alphabet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgListAlphabet;
