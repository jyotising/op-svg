import * as React from "react";
const SvgCubeTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cube-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.75 4.5 3.5 7v10l4.25 2.5L12 22l4.25-2.5L20.5 17V7l-4.25-2.5L12 2zM20.5 7l-17 10M12 2v20M3.5 7l17 10"
      />
    </g>
    <defs>
      <clipPath id="cube-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCubeTwo;
