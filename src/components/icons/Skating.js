import * as React from "react";
const SvgSkating = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#skating_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        strokeWidth={2}
        d="M22 2h-8v4h8zM22 6v11c0 .555-.445 1-1 1H4a2 2 0 0 1-2-2v-3c0-2.21 1.79-4 4-4h8V6zM7 12V9M10.5 12V9M7 22v-4M18 22v-4M11.5 9H6M22 22H3a1 1 0 0 1-1-1v-.685"
      />
    </g>
    <defs>
      <clipPath id="skating_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSkating;
