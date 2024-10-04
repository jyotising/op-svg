import * as React from "react";
const SvgConnectionArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#connection-arrow_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.495 4.013H6.09C4.727 4.013 2 4.775 2 7.983S4.727 12 6.09 12h11.907C19.36 12 22 12.784 22 15.992s-2.64 4.01-4.003 4.01H3.033"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m4.023 17.996-1.99 2.034L4.024 22M19.021 1.977l1.99 2.033-1.99 1.97"
      />
    </g>
    <defs>
      <clipPath id="connection-arrow_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgConnectionArrow;
