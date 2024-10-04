import * as React from "react";
const SvgDatabasePoint = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#database-point_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18v-3M10 20H3M14 20h7M14 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0M19.5 4.5v8c0 1.38-3.358 2.5-7.5 2.5s-7.5-1.12-7.5-2.5v-8"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.5 8.5c0 1.38-3.358 2.5-7.5 2.5S4.5 9.88 4.5 8.5M19.5 4.5C19.5 5.88 16.142 7 12 7S4.5 5.88 4.5 4.5 7.858 2 12 2s7.5 1.12 7.5 2.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.5 4.5C19.5 5.88 16.142 7 12 7S4.5 5.88 4.5 4.5 7.858 2 12 2s7.5 1.12 7.5 2.5"
      />
    </g>
    <defs>
      <clipPath id="database-point_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDatabasePoint;
