import * as React from "react";
const SvgMusicRhythm = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#music-rhythm_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.5 21H5M2.5 18H5M2.5 15H5M2.5 12H5M8 21h2.5M8 18h2.5M8 15h2.5M8 12h2.5M8 9h2.5M8 6h2.5M8 3h2.5M13.5 21H16M19 21h2.5M13.5 18H16M19 18h2.5M13.5 15H16M19 15h2.5M19 12h2.5M19 9h2.5"
      />
    </g>
    <defs>
      <clipPath id="music-rhythm_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMusicRhythm;
