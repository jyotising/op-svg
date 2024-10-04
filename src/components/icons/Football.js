import * as React from "react";
const SvgFootball = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#football_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m15.047 3.25-3.012 2.18v2.179l3.872 3.051 2.151-.872 1.29-3.487M9.023 3.25l3.012 2.18v2.179L8.163 10.66l-2.151-.872L4.72 6.301M3 11.096 6.012 9.79l2.15.871 1.291 4.795-1.29 1.744H4.29"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.163 20.25v-3.051l1.29-1.744h5.163l1.291 1.744v3.05"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.78 17.199h-3.873l-1.29-1.744 1.29-4.795 2.151-.871 3.442 1.743"
      />
    </g>
    <defs>
      <clipPath id="football_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFootball;
