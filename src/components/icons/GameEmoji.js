import * as React from "react";
const SvgGameEmoji = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#game-emoji_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 15H5a3 3 0 1 0 0 6h14a3 3 0 1 0 0-6M18 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M2 7l4.5-4.5L11 7l-4.5 4.5z"
      />
    </g>
    <defs>
      <clipPath id="game-emoji_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGameEmoji;
