import * as React from "react";
const SvgSwitchContrast = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#switch-contrast_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 5h5c.943 0 1.414 0 1.707.293S22 6.057 22 7v10c0 .943 0 1.414-.293 1.707S20.943 19 20 19h-5M9 5H4c-.943 0-1.414 0-1.707.293S2 6.057 2 7v10c0 .943 0 1.414.293 1.707S3.057 19 4 19h5M12 3v18"
      />
    </g>
    <defs>
      <clipPath id="switch-contrast_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSwitchContrast;
