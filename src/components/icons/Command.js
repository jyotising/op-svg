import * as React from "react";
const SvgCommand = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#command_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.727 7.455h2.728V4.727a2.727 2.727 0 1 0-2.728 2.728ZM4.727 16.545h2.728v2.728a2.727 2.727 0 1 1-2.728-2.728Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.546 7.455H7.455v9.09h9.09z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.273 7.455h-2.728V4.727a2.727 2.727 0 1 1 2.728 2.728ZM19.273 16.545a2.727 2.727 0 1 1-2.728 2.728v-2.728z"
      />
    </g>
    <defs>
      <clipPath id="command_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCommand;
