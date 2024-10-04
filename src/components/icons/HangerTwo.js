import * as React from "react";
const SvgHangerTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hanger-two_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.5 16h1.955a1.545 1.545 0 0 0 .69-2.927L12 8.5l-9.146 4.573A1.545 1.545 0 0 0 3.545 16H5.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5.5 15h13v7h-13v-7M12 8.5s2-3.395 2-4.5a2 2 0 1 0-4 0"
      />
    </g>
    <defs>
      <clipPath id="hanger-two_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHangerTwo;
