import * as React from "react";
const SvgFullwidth = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#fullwidth_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3v18M21 3v18zM8.5 9.5 6 12zM6 12l2.5 2.5zm0 0h12zm9.5-2.5L18 12zM18 12l-2.5 2.5z"
      />
    </g>
    <defs>
      <clipPath id="fullwidth_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFullwidth;
