import * as React from "react";
const SvgBowl = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bowl_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 22v-1.936a9 9 0 0 0 2.364-1.7A8.97 8.97 0 0 0 21 12H3a8.97 8.97 0 0 0 2.636 6.364 9 9 0 0 0 2.37 1.704L8 22zM12 9.004V4M18 9.004V6M6 9.004V6M20 4a2 2 0 0 0-2 2M14 2a2 2 0 0 0-2 2M8 4a2 2 0 0 0-2 2"
      />
    </g>
    <defs>
      <clipPath id="bowl_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBowl;
