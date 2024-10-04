import * as React from "react";
const SvgDistributeVertically = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#distribute-vertically_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <mask
        id="distribute-vertically_svg__b"
        width={24}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path fill="#333" d="M24 0H0v24h24z" />
      </mask>
      <g
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        mask="url(#distribute-vertically_svg__b)"
      >
        <path d="M5 15h14V9H5z" />
        <path strokeLinecap="round" d="M21 20H3M21 4H3" />
      </g>
    </g>
    <defs>
      <clipPath id="distribute-vertically_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDistributeVertically;
