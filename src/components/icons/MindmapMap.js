import * as React from "react";
const SvgMindmapMap = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#mindmap-map_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 12h8M13 19h8M13 5h8M9 5c-3 1-1 7-4 7m4 0H3h6m0 7c-3-1-1-7-4-7z"
      />
    </g>
    <defs>
      <clipPath id="mindmap-map_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMindmapMap;
