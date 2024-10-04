import * as React from "react";
const SvgTool = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#tool_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 8a6 6 0 0 1-8.805 5.305L4.5 22 2 19.5l8.695-8.695a6 6 0 0 1 8.11-8.11L15 6.5 17.5 9l3.805-3.805C21.75 6.032 22 6.987 22 8"
      />
    </g>
    <defs>
      <clipPath id="tool_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTool;
