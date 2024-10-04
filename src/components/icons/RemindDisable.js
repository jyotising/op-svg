import * as React from "react";
const SvgRemindDisable = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#remind-disable_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 19h20M5 19V9a7 7 0 1 1 14 0v10zM12 22a2.5 2.5 0 0 0 2.5-2.5V19h-5v.5A2.5 2.5 0 0 0 12 22M9.5 8.5l5 5M14.5 8.5l-5 5"
      />
    </g>
    <defs>
      <clipPath id="remind-disable_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRemindDisable;
