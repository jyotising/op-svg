import * as React from "react";
const SvgBadgeTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#badge-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m8 22 4-2 4 2v-9.528A5.98 5.98 0 0 1 12 14a5.98 5.98 0 0 1-4-1.528z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 8a5.99 5.99 0 0 1-2 4.472A5.98 5.98 0 0 1 12 14a5.98 5.98 0 0 1-4-1.528A6 6 0 1 1 18 8"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 10.5h-1m1 0v-5L11 6zm0 0h1z"
      />
    </g>
    <defs>
      <clipPath id="badge-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBadgeTwo;
