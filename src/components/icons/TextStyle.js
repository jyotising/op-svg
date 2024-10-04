import * as React from "react";
const SvgTextStyle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#text-style_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 3h5v5M9.594 13.5h4.812M8.5 16l1.094-2.5zm7 0-1.094-2.5zm-5.906-2.5L12 8l2.406 5.5zM8 3H3v5M16 21h5v-5M8 21H3v-5"
      />
    </g>
    <defs>
      <clipPath id="text-style_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTextStyle;
