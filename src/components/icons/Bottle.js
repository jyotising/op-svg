import * as React from "react";
const SvgBottle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bottle_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 9H6v13h12z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.947 5.5h4.106a2 2 0 0 1 1.9 1.375l.7 2.125H7.347l.7-2.125a2 2 0 0 1 1.9-1.375"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M10.5 5.5v-2a1.5 1.5 0 1 1 3 0v2M9.25 13v5"
      />
    </g>
    <defs>
      <clipPath id="bottle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBottle;
