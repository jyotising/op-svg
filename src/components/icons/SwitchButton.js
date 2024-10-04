import * as React from "react";
const SvgSwitchButton = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#switch-button_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 2H6a4 4 0 1 0 0 8h12a4 4 0 0 0 0-8ZM18 14H6a4 4 0 0 0 0 8h12a4 4 0 0 0 0-8Z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </g>
    <defs>
      <clipPath id="switch-button_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSwitchButton;
