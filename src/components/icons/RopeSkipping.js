import * as React from "react";
const SvgRopeSkipping = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#rope-skipping_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 16V5.5a3.5 3.5 0 0 1 7 0v13a3.5 3.5 0 1 0 7 0V8"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.5 8h-3M16 8h1.5zm6 0h-1.5zm-1.5 0V2h-3v6zM3.5 16h3M8 16H6.5zm-6 0h1.5zm1.5 0v6h3v-6z"
      />
    </g>
    <defs>
      <clipPath id="rope-skipping_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRopeSkipping;
