import * as React from "react";
const SvgCubeThree = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cube-three_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.75 4.5 3.5 7v10l4.25 2.5L12 22l4.25-2.5L20.5 17V7l-4.25-2.5L12 2zM12 2v10M20.5 17 12 12M3.5 17l8.5-5M12 22v-5M20.5 7l-4 2.5M3.5 7l4 2.5"
      />
    </g>
    <defs>
      <clipPath id="cube-three_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCubeThree;
