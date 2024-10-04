import * as React from "react";
const SvgHands = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hands_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 11a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M2.25 22c0-3 3.5-8 9.75-8 0 0 1.38 0 2.891.545 1.48.535 3.359 1.029 3.359-.546V3.875a1.875 1.875 0 0 1 3.75 0V22"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1 22h22"
      />
    </g>
    <defs>
      <clipPath id="hands_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHands;
