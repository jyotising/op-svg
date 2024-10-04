import * as React from "react";
const SvgConcern = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#concern_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M5.429 4.929A9.97 9.97 0 0 0 2.5 12a9.97 9.97 0 0 0 2.929 7.071M19.571 19.071A9.97 9.97 0 0 0 22.5 12a9.97 9.97 0 0 0-2.929-7.071M17.45 16.95A6.98 6.98 0 0 0 19.5 12a6.98 6.98 0 0 0-2.05-4.95M7.55 7.05A6.98 6.98 0 0 0 5.5 12c0 1.933.784 3.683 2.05 4.95"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.09 10c1.055 0 1.91.806 1.91 1.8 0 1.294-1.273 2.4-1.91 3q-.635.6-1.59 1.2-.955-.6-1.59-1.2c-.637-.6-1.91-1.706-1.91-3 0-.994.855-1.8 1.91-1.8.663 0 1.248.32 1.59.805A1.94 1.94 0 0 1 14.09 10Z"
      />
    </g>
    <defs>
      <clipPath id="concern_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgConcern;
