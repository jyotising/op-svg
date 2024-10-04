import * as React from "react";
const SvgClearFormat = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#clear-format_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22.39 12.085 15.96 3.55l-8.892 6.7 6.683 8.25 1.678-1.168z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m13.75 18.5-1.92 1.537H6.55l-1.3-1.726-3.216-4.267 5.217-3.932"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M6.603 20.036h15.68"
      />
    </g>
    <defs>
      <clipPath id="clear-format_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClearFormat;
