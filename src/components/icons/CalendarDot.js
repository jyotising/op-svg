import * as React from "react";
const SvgCalendarDot = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#calendar-dot_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M2 7h20M22 5.5v6M6 11h2M11 11h2M16 11h2M6 14.5h2M11 14.5h2M16 14.5h2M6 18h2M11 18h2M16 18h2M2 5.5v6"
      />
    </g>
    <defs>
      <clipPath id="calendar-dot_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCalendarDot;