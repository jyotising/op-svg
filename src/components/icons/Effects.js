import * as React from "react";
const SvgEffects = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#effects_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12.475 21.18 2.733-5.995 6.344-1.86-4.883-4.44.184-6.581-5.751 3.251-6.23-2.208L6.2 9.797l-4.035 5.217 6.572.734zM18.089 18.027l4 3.982"
      />
    </g>
    <defs>
      <clipPath id="effects_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEffects;
