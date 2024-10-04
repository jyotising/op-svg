import * as React from "react";
const SvgFigmaComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#figma-component_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 6 12 2.5 15.5 6 12 9.5zM8.5 18l3.5-3.5 3.5 3.5-3.5 3.5zM14.5 12 18 8.5l3.5 3.5-3.5 3.5zM2.5 12 6 8.5 9.5 12 6 15.5z"
      />
    </g>
    <defs>
      <clipPath id="figma-component_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFigmaComponent;
