import * as React from "react";
const SvgGobletFull = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#goblet-full_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.5 22h-10M11.5 14v8M17.5 8c0 .838-.178 1.642-.5 2.374-.926 2.11-3.04 3.626-5.5 3.626a6 6 0 0 1-6-6c0-1.186.267-2.306.605-3.25C6.694 3.109 7.5 2 7.5 2h8s.908 1.248 1.5 3.056c.287.876.5 1.883.5 2.944"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.5 8s-3.5 1.5-6 0-6 0-6 0"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 5.056c.287.876.5 1.883.5 2.944 0 .838-.178 1.642-.5 2.375M6.105 4.75C5.767 5.694 5.5 6.814 5.5 8c0 .943.218 1.835.605 2.629"
      />
    </g>
    <defs>
      <clipPath id="goblet-full_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGobletFull;
