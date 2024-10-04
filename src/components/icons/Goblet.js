import * as React from "react";
const SvgGoblet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#goblet_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.5 22h-10M11.5 14v8M17.5 8c0 3.25-2.686 6-6 6a6 6 0 0 1-6-6c0-3.25 2-6 2-6h8s2 2.75 2 6"
      />
    </g>
    <defs>
      <clipPath id="goblet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGoblet;
