import * as React from "react";
const SvgDropDownList = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#drop-down-list_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m20 14-8 6-8-6"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M4 5h16M4 9h16"
      />
    </g>
    <defs>
      <clipPath id="drop-down-list_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDropDownList;