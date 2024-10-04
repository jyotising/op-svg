import * as React from "react";
const SvgPills = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#pills_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="m4.987 11.031 3.638-3.053 3.639-3.053a5.25 5.25 0 1 1 6.75 8.043l-3.64 3.053-3.638 3.054a5.25 5.25 0 1 1-6.75-8.044Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9.844 10.93 2.869 3.42"
      />
    </g>
    <defs>
      <clipPath id="pills_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPills;
