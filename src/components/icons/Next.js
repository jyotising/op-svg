import * as React from "react";
const SvgNext = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#next_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 20.418q3.67-4.48 6.518-5.084 2.847-.605 5.423-.182V20.5L22 11.773 13.94 3.5v5.084Q9.18 8.62 5.846 12 2.511 15.38 2 20.418Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="next_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgNext;
