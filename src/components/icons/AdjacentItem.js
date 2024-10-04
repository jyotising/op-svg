import * as React from "react";
const SvgAdjacentItem = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#adjacent-item_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 6.5v3h14v-6H7zm0 0H3v11h4zm0 11v3h14v-6H7z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 6.5H3v11h4M7 14.5h14v6H7v-6M7 3.5h14v6H7v-6"
      />
    </g>
    <defs>
      <clipPath id="adjacent-item_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAdjacentItem;
