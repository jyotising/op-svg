import * as React from "react";
const SvgPaintedEggshell = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#painted-eggshell_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M12 22c5.126 0 8-3.477 8-9S15.566 2 12 2 4 7.477 4 13s2.874 9 8 9Z"
        clipRule="evenodd"
      />
      <path fill="#333" d="M10.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M8 14.834a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="painted-eggshell_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPaintedEggshell;
