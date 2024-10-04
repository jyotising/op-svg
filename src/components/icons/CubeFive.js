import * as React from "react";
const SvgCubeFive = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cube-five_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 13.5 12 22M9 13.5l3 8.5M9 13.5h6M20.5 17 15 13.5M20.5 7 15 13.5M20.5 7 12 8.5M15 13.5l-3-5M12 2v6.5M3.5 7 12 8.5M9 13.5l3-5M9 13.5 3.5 7M9 13.5 3.5 17M20.66 7 12 2 3.34 7v10L12 22l8.66-5z"
      />
    </g>
    <defs>
      <clipPath id="cube-five_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCubeFive;
