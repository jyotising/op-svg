import * as React from "react";
const SvgMagic = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#magic_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m10.05 4.05 2.122 2.122M15 2v3zm4.95 2.05-2.122 2.122zM22 9h-3zm-2.05 4.95-2.122-2.122zM15 16v-3zm-4.95-2.05 2.122-2.122zM8 9h3zM14.793 9.207l-12.02 12.02"
      />
    </g>
    <defs>
      <clipPath id="magic_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMagic;
