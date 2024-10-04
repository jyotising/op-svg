import * as React from "react";
const SvgFlashlight = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#flashlight_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.5 11.098a.2.2 0 0 0-.078-.157A9.8 9.8 0 0 1 4.5 3.098V2h15v1.098a9.8 9.8 0 0 1-3.921 7.843.2.2 0 0 0-.079.157V22h-7z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 5.5H5M12 14.004v2M8.5 11a10 10 0 0 1-4-8V2M19.5 2v1a10 10 0 0 1-4 8"
      />
    </g>
    <defs>
      <clipPath id="flashlight_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFlashlight;
