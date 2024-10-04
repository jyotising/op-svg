import * as React from "react";
const SvgMusic = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#music_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 17.25c0-.966.784-1.75 1.75-1.75h3.75v1.7a1.8 1.8 0 0 1-1.8 1.8h-1.95A1.75 1.75 0 0 1 15 17.25ZM3 19.25c0-.966.784-1.75 1.75-1.75H8v1.7A1.8 1.8 0 0 1 6.2 21H4.75A1.75 1.75 0 0 1 3 19.25Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8 9.022 12.5-2.96M8 19V5l12.5-3v14.846"
      />
    </g>
    <defs>
      <clipPath id="music_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMusic;
