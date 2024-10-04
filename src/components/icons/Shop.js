import * as React from "react";
const SvgShop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#shop_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 6h20v4l-.7.42a3.5 3.5 0 0 1-3.6 0L17 10l-.7.42a3.5 3.5 0 0 1-3.6 0L12 10l-.7.42a3.5 3.5 0 0 1-3.6 0L7 10l-.7.42a3.5 3.5 0 0 1-3.6 0L2 10z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 11.244V22h16V11M4 5.911V2h16v4"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.5 16h-5v6h5z"
      />
    </g>
    <defs>
      <clipPath id="shop_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgShop;
