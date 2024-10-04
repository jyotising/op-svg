import * as React from "react";
const SvgMiniSdCard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#mini-sd-card_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.999 9.37 4 10.96V22h16V2H6.999z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M10.5 6v3M16.5 6v3M13.5 6v3"
      />
    </g>
    <defs>
      <clipPath id="mini-sd-card_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMiniSdCard;
