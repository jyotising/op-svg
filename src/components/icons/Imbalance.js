import * as React from "react";
const SvgImbalance = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#imbalance_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9.5V2M6 11l6-1.5L18 8M14 15l4-7M22 15l-4-7M10 18l-4-7M2 18l4-7"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 22a4 4 0 0 0 4-4H2a4 4 0 0 0 4 4M18 19a4 4 0 0 0 4-4h-8a4 4 0 0 0 4 4"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="imbalance_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgImbalance;
