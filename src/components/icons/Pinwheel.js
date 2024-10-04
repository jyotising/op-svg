import * as React from "react";
const SvgPinwheel = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#pinwheel_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.5 2v8.5h-5zM13.5 22v-8.5h5zM13.5 5.5l8.5 5h-8.5zM10.5 18.5l-8.5-5h8.5z"
      />
    </g>
    <defs>
      <clipPath id="pinwheel_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPinwheel;
