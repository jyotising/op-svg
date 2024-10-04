import * as React from "react";
const SvgTheme = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#theme_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 3a3 3 0 1 0 6 0h2.727L21 7.91l-2.864 2.454V21H5.864V10.364L3 7.909 6.273 3z"
      />
    </g>
    <defs>
      <clipPath id="theme_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTheme;
