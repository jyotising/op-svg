import * as React from "react";
const SvgMagicWand = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#magic-wand_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8 13.5 2.5 2.5m-6.71 1.71A9.95 9.95 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.95 9.95 0 0 1-5.71-1.79zm0 0a10 10 0 0 0 2.5 2.5zm0 0L8 13.5zm2.5 2.5L10.5 16zM8 13.5l2-2 2.5 2.5-2 2zM9.5 6v2m-1-1h2zM15.5 7v3M14 8.5h3zM17 13.5v2m-1-1h2z"
      />
    </g>
    <defs>
      <clipPath id="magic-wand_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMagicWand;
