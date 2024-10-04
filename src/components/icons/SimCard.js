import * as React from "react";
const SvgSimCard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#sim-card_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M5 22h14a1 1 0 0 0 1-1V7.442a1 1 0 0 0-.327-.74L14.786 2.26a1 1 0 0 0-.673-.26H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1Z"
      />
      <path fill="#333" d="M8.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 11.5H8v7h8z"
      />
    </g>
    <defs>
      <clipPath id="sim-card_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSimCard;
