import * as React from "react";
const SvgReduceDecimalPlaces = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#reduce-decimal-places_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M13.5 4.5a2.5 2.5 0 0 0-5 0v5a2.5 2.5 0 0 0 5 0z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12.5 16-3 3 3 3"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M4 12h.5" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 19H9.5"
      />
    </g>
    <defs>
      <clipPath id="reduce-decimal-places_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgReduceDecimalPlaces;
