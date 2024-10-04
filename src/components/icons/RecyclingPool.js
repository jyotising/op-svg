import * as React from "react";
const SvgRecyclingPool = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#recycling-pool_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m10 8 2 2 2-2M16 14.5l2 2 2-2M4 14.5l2 2 2-2M12 10V2"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 16.433V9.818a2 2 0 0 1 2-2h2M6 16.433V9.818a2 2 0 0 0-2-2H2M2 18v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2"
      />
    </g>
    <defs>
      <clipPath id="recycling-pool_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRecyclingPool;
