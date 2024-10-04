import * as React from "react";
const SvgTimeline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#timeline_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6.5 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM15.5 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM6.5 18a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2 18h4.5M10.5 18H22M2 6h4.5M10.5 6H22"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 2v20"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M2 12h13.5M19.5 12H22"
      />
    </g>
    <defs>
      <clipPath id="timeline_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTimeline;
