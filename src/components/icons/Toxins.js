import * as React from "react";
const SvgToxins = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#toxins_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.979 22s.012-1.735 0-2.12a9.5 9.5 0 0 0 2.239-1.662A9.5 9.5 0 1 0 7.222 19.4c.258.173.505.333.78.48V22z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 13.5a2 2 0 0 0 2-2l-2-2a2 2 0 1 0 0 4ZM16 13.5a2 2 0 0 1-2-2l2-2a2 2 0 1 1 0 4Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m11 17 1.469-1.5L14 16.948"
      />
    </g>
    <defs>
      <clipPath id="toxins_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgToxins;
