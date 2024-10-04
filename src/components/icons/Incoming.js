import * as React from "react";
const SvgIncoming = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#incoming_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 6.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0ZM18.5 6.5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2 6.5h3M9 6.5h5.5M18.5 6.5H22"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m5 14.5-3 3 3 3M2 17.5h20"
      />
    </g>
    <defs>
      <clipPath id="incoming_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIncoming;
