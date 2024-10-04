import * as React from "react";
const SvgBlocksAndArrows = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#blocks-and-arrows_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 3H3v7h7zM10 14H3v7h7zM21 3h-7v7h7zM14 14l7 7m-7-7h7zm0 0v7z"
      />
    </g>
    <defs>
      <clipPath id="blocks-and-arrows_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBlocksAndArrows;