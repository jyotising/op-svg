import * as React from "react";
const SvgKey = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#key_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.434 12.15a4.93 4.93 0 0 1 1.315 4.793 4.96 4.96 0 0 1-3.533 3.514 5 5 0 0 1-4.82-1.307 4.93 4.93 0 0 1 .061-6.94 4.995 4.995 0 0 1 6.976-.06z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.5 12 20 3.5"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15.153 8.45 2.714 2.7L21.034 8l-2.715-2.7z"
      />
    </g>
    <defs>
      <clipPath id="key_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgKey;
