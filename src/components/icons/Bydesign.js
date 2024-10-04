import * as React from "react";
const SvgBydesign = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bydesign_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 3.641 9.778 2v6.359L4 10zM4 12.838l5.778-1.641v6.358L4 19.197zM12.445 10.538l5.777-1.427v11.462L12.444 22z"
      />
    </g>
    <defs>
      <clipPath id="bydesign_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBydesign;
