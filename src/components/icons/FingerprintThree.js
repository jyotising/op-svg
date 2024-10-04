import * as React from "react";
const SvgFingerprintThree = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#fingerprint-three_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21.216 6.02a13.15 13.15 0 0 0-9.257-3.77 13.15 13.15 0 0 0-9.214 3.729M3.333 14.737v-.029A8.667 8.667 0 0 1 12 6.042M15.585 6.815a8.67 8.67 0 0 1 5.082 7.893v.007M7.125 18.5V14.71a4.875 4.875 0 1 1 9.75 0V18.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.763 21.75c.982-.242 1.612-1.277 1.612-2.152V15.25a1.625 1.625 0 0 1 3.25 0v4.348"
      />
    </g>
    <defs>
      <clipPath id="fingerprint-three_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFingerprintThree;
