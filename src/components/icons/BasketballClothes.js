import * as React from "react";
const SvgBasketballClothes = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#basketball-clothes_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 2a3 3 0 0 1-6 0H7.5c-.552 0-1.001.447-1.016 1C6.45 4.284 6.341 6.475 6 7.5c-.38 1.142-1.92 2.573-2.633 3.192-.23.199-.367.485-.367.789V21a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9.52c0-.303-.137-.59-.367-.788-.713-.62-2.252-2.05-2.633-3.192-.341-1.024-.45-3.215-.484-4.5-.015-.553-.464-1-1.016-1z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.5 12h-3v6h3z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.5 12h3v6h-3M10.5 15h-3"
      />
    </g>
    <defs>
      <clipPath id="basketball-clothes_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBasketballClothes;
