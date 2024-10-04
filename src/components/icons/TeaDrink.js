import * as React from "react";
const SvgTeaDrink = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#tea-drink_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 10c0 6.075 3 11 9 11s9-4.925 9-11z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 7V3M15 7V5M5 7V5M18.095 15.312c.495-1.292.787-2.743.876-4.286A6 6 0 0 1 19.5 11c1.933 0 3.5 1.007 3.5 2.25s-1.567 2.25-3.5 2.25c-.5 0-.975-.067-1.405-.188"
      />
    </g>
    <defs>
      <clipPath id="tea-drink_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTeaDrink;
