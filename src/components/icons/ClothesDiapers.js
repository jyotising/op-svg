import * as React from "react";
const SvgClothesDiapers = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#clothes-diapers_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5.5h18v4s0 4-2 6-5.079 3-5.079 3H10.08S7 17.5 5 15.5s-2-6-2-6z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.079 18.5s.05-3.537-1.579-5.5C6.978 11.166 3 9.5 3 9.5M13.921 18.5s-.05-3.537 1.579-5.5c1.522-1.834 5.5-3.5 5.5-3.5"
      />
    </g>
    <defs>
      <clipPath id="clothes-diapers_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClothesDiapers;
