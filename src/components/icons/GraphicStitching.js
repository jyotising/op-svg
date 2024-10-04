import * as React from "react";
const SvgGraphicStitching = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#graphic-stitching_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m12 12 5-5A5 5 0 0 0 7 7z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m7 17 5-5-5-5a5 5 0 0 0 0 10M17 17a5 5 0 0 0 0-10l-5 5z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22a5 5 0 0 0 5-5l-5-5-5 5a5 5 0 0 0 5 5"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="graphic-stitching_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGraphicStitching;
