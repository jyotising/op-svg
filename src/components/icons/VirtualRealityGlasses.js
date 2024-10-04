import * as React from "react";
const SvgVirtualRealityGlasses = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#virtual-reality-glasses_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.5 8h19a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5H15l-2.996-3L9 20H2.5a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M17 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M3 5h18"
      />
    </g>
    <defs>
      <clipPath id="virtual-reality-glasses_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgVirtualRealityGlasses;
