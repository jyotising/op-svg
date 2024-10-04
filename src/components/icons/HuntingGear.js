import * as React from "react";
const SvgHuntingGear = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hunting-gear_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 14.5H2V21h20zM2 14.5l2.52-12h14.99l2.49 12"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M9.5 6a2.5 2.5 0 0 0 0 5M14.5 11a2.5 2.5 0 0 0 0-5M10 8.5h4"
      />
    </g>
    <defs>
      <clipPath id="hunting-gear_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHuntingGear;
