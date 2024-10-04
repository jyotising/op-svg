import * as React from "react";
const SvgCycleArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cycle-arrow_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 8h-2a4.5 4.5 0 1 0 3.173 7.691C10.493 14.876 12 12.5 12 12.5s1.503-2.366 2.316-3.18A4.5 4.5 0 1 1 17.5 17h-2"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m17.5 15-2 2 2 2M6.5 6l2 2-2 2"
      />
    </g>
    <defs>
      <clipPath id="cycle-arrow_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCycleArrow;
