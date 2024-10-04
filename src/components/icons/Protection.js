import * as React from "react";
const SvgProtection = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#protection_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12c0-4.694-4.03-8.5-9-8.5S3 7.306 3 12z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12.004v7.269C12 20.779 10.757 22 9.25 22S6.5 20.779 6.5 19.273"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M12 2v1.5" />
    </g>
    <defs>
      <clipPath id="protection_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgProtection;
