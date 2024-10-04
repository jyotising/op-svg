import * as React from "react";
const SvgTree = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#tree_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.522 7a5.5 5.5 0 0 1 10.956 0h.022a4.5 4.5 0 1 1 0 9h-11a4.5 4.5 0 1 1 0-9zM12 14l2.5-2.5M12 12.5l-3-3M12 22V9"
      />
    </g>
    <defs>
      <clipPath id="tree_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTree;
