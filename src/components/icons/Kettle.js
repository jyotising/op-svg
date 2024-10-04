import * as React from "react";
const SvgKettle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#kettle_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 18.5H3V22h18zM19 18 18 5H2l3.283 3.775a1.5 1.5 0 0 1 .363 1.103L5 18M13 9h-2.5M13 12h-2.5M13 15h-2.5M18 5h4v8h-3M9.5 4.5V2H14v2.5"
      />
    </g>
    <defs>
      <clipPath id="kettle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKettle;
