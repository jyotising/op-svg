import * as React from "react";
const SvgDiskTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#disk-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M17 6.5H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 6.5h5v11H2zM18 9.5h4v5h-4"
      />
      <path
        fill="#333"
        d="M15 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
    </g>
    <defs>
      <clipPath id="disk-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDiskTwo;
